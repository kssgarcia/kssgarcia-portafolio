import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable"
import SplitType from 'split-type';


function App() {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Draggable);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://kssgarcia.github.io/OptBlog/blog/index.xml', {
            "Content-Type": "application/xml; charset=utf-8"
        })
        .then(response => {
            xml2js.parseString(response.data, (err, result) => {
                if (err) {
                    throw err;
                }
                // Assuming the XML structure includes <item> elements inside <channel>
                const parsedPosts = result.rss.channel[0].item.map(item => ({
                    title: item.title[0],
                    link: item.link[0],
                    description: item.description[0],
                    pubDate: item.pubDate[0]
                }));
                setPosts(parsedPosts.slice(0, 4));
            });
        })
        .catch(error => console.error('Error fetching or parsing posts:', error));
    }, []);

    useGSAP(() => {
        new SplitType(".title-1");
        new SplitType(".title-2");
        new SplitType(".title-3");

        gsap.to(".words", { opacity: 1, delay: 1.5 });
        gsap.to('.front-titles .char', { y: 0, opacity: 1, stagger: 0.05, duration: 1 });

        const boxes = gsap.utils.toArray(".container-projects .list-projects .project");
        console.clear();

        let activeElement;
        const loop = horizontalLoop(boxes, {
            paused: true,
            draggable: true, // make it draggable
            center: true, // active element is the one in the center of the container rather than th left edge
            onChange: (element, index) => { // when the active element changes, this function gets called.
                activeElement && activeElement.classList.remove("active");
                element.classList.add("active");
                activeElement = element;
            }
        });


        boxes.forEach((box, i) => box.addEventListener("click", () => loop.toIndex(i, { duration: 0.7, ease: "back.out" })));

        loop.toIndex(0, { duration: 0.0, ease: "back.out" });

        document.querySelector(".next").addEventListener("click", () => loop.next({ duration: 0.7, ease: "back.out" }));
        document.querySelector(".prev").addEventListener("click", () => loop.previous({ duration: 0.7, ease: "back.out" }));

        function horizontalLoop(items, config) {
            let timeline;
            items = gsap.utils.toArray(items);
            config = config || {};
            gsap.context(() => { // use a context so that if this is called from within another context or a gsap.matchMedia(), we can perform proper cleanup like the "resize" event handler on the window
                let onChange = config.onChange,
                    lastIndex = 0,
                    tl = gsap.timeline({
                        repeat: config.repeat, onUpdate: onChange && function () {
                            let i = tl.closestIndex();
                            if (lastIndex !== i) {
                                lastIndex = i;
                                onChange(items[i], i);
                            }
                        }, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
                    }),
                    length = items.length,
                    startX = items[0].offsetLeft,
                    times = [],
                    widths = [],
                    spaceBefore = [],
                    xPercents = [],
                    curIndex = 0,
                    indexIsDirty = false,
                    center = config.center,
                    pixelsPerSecond = (config.speed || 1) * 100,
                    snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
                    timeOffset = 0,
                    container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
                    totalWidth,
                    getTotalWidth = () => items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + spaceBefore[0] + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0),
                    populateWidths = () => {
                        let b1 = container.getBoundingClientRect(), b2;
                        items.forEach((el, i) => {
                            widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
                            b2 = el.getBoundingClientRect();
                            spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
                            b1 = b2;
                        });
                        gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
                            xPercent: i => xPercents[i]
                        });
                        totalWidth = getTotalWidth();
                    },
                    timeWrap,
                    populateOffsets = () => {
                        timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
                        center && times.forEach((t, i) => {
                            times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
                        });
                    },
                    getClosest = (values, value, wrap) => {
                        let i = values.length,
                            closest = 1e10,
                            index = 0, d;
                        while (i--) {
                            d = Math.abs(values[i] - value);
                            if (d > wrap / 2) {
                                d = wrap - d;
                            }
                            if (d < closest) {
                                closest = d;
                                index = i;
                            }
                        }
                        return index;
                    },
                    populateTimeline = () => {
                        let i, item, curX, distanceToStart, distanceToLoop;
                        tl.clear();
                        for (i = 0; i < length; i++) {
                            item = items[i];
                            curX = xPercents[i] / 100 * widths[i];
                            distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
                            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
                            tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
                                .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
                                .add("label" + i, distanceToStart / pixelsPerSecond);
                            times[i] = distanceToStart / pixelsPerSecond;
                        }
                        timeWrap = gsap.utils.wrap(0, tl.duration());
                    },
                    refresh = (deep) => {
                        let progress = tl.progress();
                        tl.progress(0, true);
                        populateWidths();
                        deep && populateTimeline();
                        populateOffsets();
                        deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
                    },
                    onResize = () => refresh(true),
                    proxy;
                gsap.set(items, { x: 0 });
                populateWidths();
                populateTimeline();
                populateOffsets();
                window.addEventListener("resize", onResize);
                function toIndex(index, vars) {
                    vars = vars || {};
                    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
                    let newIndex = gsap.utils.wrap(0, length, index),
                        time = times[newIndex];
                    if (time > tl.time() !== index > curIndex && index !== curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
                        time += tl.duration() * (index > curIndex ? 1 : -1);
                    }
                    if (time < 0 || time > tl.duration()) {
                        vars.modifiers = { time: timeWrap };
                    }
                    curIndex = newIndex;
                    vars.overwrite = true;
                    gsap.killTweensOf(proxy);
                    return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
                }
                tl.toIndex = (index, vars) => toIndex(index, vars);
                tl.closestIndex = setCurrent => {
                    let index = getClosest(times, tl.time(), tl.duration());
                    if (setCurrent) {
                        curIndex = index;
                        indexIsDirty = false;
                    }
                    return index;
                };
                tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
                tl.next = vars => toIndex(tl.current() + 1, vars);
                tl.previous = vars => toIndex(tl.current() - 1, vars);
                tl.times = times;
                tl.progress(1, true).progress(0, true); // pre-render for performance
                if (config.reversed) {
                    tl.vars.onReverseComplete();
                    tl.reverse();
                }
                if (config.draggable && typeof (Draggable) === "function") {
                    proxy = document.createElement("div")
                    let wrap = gsap.utils.wrap(0, 1),
                        ratio, startProgress, draggable, lastSnap, initChangeX, wasPlaying,
                        align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
                        syncIndex = () => tl.closestIndex(true);
                    draggable = Draggable.create(proxy, {
                        trigger: items[0].parentNode,
                        type: "x",
                        onPressInit() {
                            let x = this.x;
                            gsap.killTweensOf(tl);
                            wasPlaying = !tl.paused();
                            tl.pause();
                            startProgress = tl.progress();
                            refresh();
                            ratio = 1 / totalWidth;
                            initChangeX = (startProgress / -ratio) - x;
                        },
                        onDrag: align,
                        onThrowUpdate: align,
                        onRelease() {
                            syncIndex();
                            draggable.isThrowing && (indexIsDirty = true);
                            console.log(draggable.getDirection("start"));
                            console.log(draggable.getDirection("end"));
                            console.log(draggable.getDirection("velocity"));
                            console.log(boxes);
                            if (draggable.getDirection("start") === "left") {
                                loop.next({ duration: 0.7, ease: "back.out" })
                            } else if (draggable.getDirection("start") === "right") {
                                loop.previous({ duration: 0.7, ease: "back.out" })
                            }
                        },
                    })[0];
                    tl.draggable = draggable;
                }
                tl.closestIndex(true);
                lastIndex = curIndex;
                onChange && onChange(items[curIndex], curIndex);
                timeline = tl;
                return () => window.removeEventListener("resize", onResize); // cleanup
            });
            return timeline;
        }

        if (!window.matchMedia("only screen and (max-width: 760px)").matches) {
            new SplitType(".title-projects");
            new SplitType(".title-blog");
            new SplitType(".container-projects .list-projects .project-name");
            new SplitType(".container-projects .list-projects .project-description");
            new SplitType(".container-blog .content-blog ul a");

            gsap.to('.container-projects .title-projects .char', {
                scrollTrigger: { trigger: '.container-projects .title-projects', start: 'bottom bottom', end: 'bottom bottom', toggleActions: 'restart none reverse none' },
                y: 0, opacity: 1, stagger: 0.05, duration: 0.5
            });
            gsap.to('.container-blog .title-blog .char', {
                scrollTrigger: { trigger: '.container-blog .title-blog', start: 'top bottom', end: 'top bottom', toggleActions: 'restart none reverse none' },
                y: 0, opacity: 1, stagger: 0.05, duration: 0.5
            });

            gsap.utils.toArray('.container-projects .list-projects .project .project-info').forEach(text => {
                gsap.to(text.querySelectorAll('.char'), {
                    scrollTrigger: { trigger: text, start: 'top bottom', end: 'top bottom', toggleActions: 'restart none reverse none' },
                    opacity: 1, stagger: 0.01, duration: 0.5
                });
            });

            gsap.utils.toArray('.container-blog .content-blog ul a').forEach(text => {
                gsap.to(text.querySelectorAll('.char'), {
                    scrollTrigger: { trigger: text, start: 'center bottom', end: 'center bottom', toggleActions: 'restart none reverse none'},
                    opacity: 1, stagger: 0.01, duration: 0.5
                });
            });
        }
    }, [])

    return (
        <div>
            <div id="container">
                <div className="front">
                    <div className="front-titles title-1">
                        PORTAFOLIO
                    </div>
                    <div className="front-titles title-2">
                        MECHANICAL
                    </div>
                    <div className="front-titles title-3">
                        ENGINEER
                    </div>

                    <div className="left-words words">
                        <div className="word-1">KEVIN</div>
                        <div className="word-2">PORTAFOLIO V1</div>
                    </div>
                    <div className="right-words words">
                        <div className="word-1">SOFTWARE</div>
                        <div className="word-2">FRIENDS</div>
                    </div>

                    <div className="top-words words">
                        <div className="word-1">"FEM"</div>
                        <div className="word-2">/*THE BEST 2024*/</div>
                        <div className="word-3">--MACHINE LEARNING--</div>
                    </div>
                    <div className="scroll-down">
                        <div>Scroll</div>
                    </div>
                </div>
                <div className="container-projects">
                    <div className="title-projects">
                        Projects
                    </div>
                    <div className="list-projects">
                        <div className="project project-1">
                            <div className="container-img">
                                <img src="proj_1.png" alt="Project 1" draggable="false" />
                            </div>
                            <div className="project-info">
                                <div className="project-name">Project 1</div>
                                <div className="project-description">This is the bestr ptoject that has been done in many time</div>
                            </div>
                        </div>

                        <div className="project project-2">
                            <div className="container-img">
                                <img src="proj_1.png" alt="Project 2" draggable="false" />
                            </div>
                            <div className="project-info">
                                <div className="project-name">Project 2</div>
                                <div className="project-description">This is the bestr ptoject that has been done in many time</div>
                            </div>
                        </div>

                        <div className="project project-3">
                            <div className="container-img">
                                <img src="proj_1.png" alt="Project 3" draggable="false" />
                            </div>
                            <div className="project-info">
                                <div className="project-name">Project 3</div>
                                <div className="project-description">This is the bestr ptoject that has been done in many time</div>
                            </div>
                        </div>
                    </div>
                    <div className="button-projects">
                        <button class="prev"></button>
                        <button class="next"></button>
                    </div>
                </div>

                <div className="container-blog">
                    <div className="title-blog">
                        Blog
                    </div>
                    <div className="content-blog">
                        <ul>
                            {posts.map((post, index) => (
                                <li key={index}>
                                    <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
                                    <p>Published on: {post.pubDate}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="container-foot">
                    <div className="container-title">
                        <div className="title-foot">Do you have some question or a project to share?</div>
                        <div className="title-foot">Do you have some question or a project to share?</div>
                    </div>
                    <div className="social-contact">

                    </div>
                    <div className="work-contact">

                    </div>
                </div>
            </div>
        </div >
    );
}


export default App;

