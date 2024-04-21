import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable"
import { Observer } from "gsap/Observer";
import SplitType from 'split-type';


function App() {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Draggable);
    gsap.registerPlugin(Observer) 

    useGSAP(() => {
        new SplitType(".title-1");
        new SplitType(".title-2");
        new SplitType(".title-3");

        gsap.to(".words", { opacity: 1, delay: 1.5 });
        gsap.to('.front-titles .char', { y: 0, opacity: 1, stagger: 0.05, duration: 1 });

        // create an infinite loop
        let loop = horizontalLoop(".container-projects .project", { repeat: -1 });
        // create a tween that'll always decelerate the timeScale of the timeline back to 0 over the course of 0.5 seconds (or whatever)
        let slow = gsap.to(loop, { timeScale: 0, duration: 0.5 });
        // make the loop stopped initially.
        loop.timeScale(0);
        // now use an Observer to listen to pointer/touch/wheel events and set the timeScale of the infinite looping timeline accordingly. 
        Observer.create({
            target: ".container-projects .list-projects",
            type: "pointer,touch",
            wheelSpeed: 0,
            onChange: self => {
                loop.timeScale(Math.abs(self.deltaX) > Math.abs(self.deltaY) ? -self.deltaX : -self.deltaY); // whichever direction is bigger
                slow.invalidate().restart(); // now decelerate
            }
        });
        function horizontalLoop(items, config) {
            items = gsap.utils.toArray(items);
            config = config || {};
            let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
                length = items.length,
                startX = items[0].offsetLeft,
                times = [],
                widths = [],
                xPercents = [],
                curIndex = 0,
                pixelsPerSecond = (config.speed || 1) * 100,
                snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
                totalWidth, curX, distanceToStart, distanceToLoop, item, i;
            gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
                xPercent: (i, el) => {
                    let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                    xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
                    return xPercents[i];
                }
            });
            gsap.set(items, { x: 0 });
            totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
            for (i = 0; i < length; i++) {
                item = items[i];
                curX = xPercents[i] / 100 * widths[i];
                distanceToStart = item.offsetLeft + curX - startX;
                distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
                tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
                    .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
                    .add("label" + i, distanceToStart / pixelsPerSecond);
                times[i] = distanceToStart / pixelsPerSecond;
            }
            function toIndex(index, vars) {
                vars = vars || {};
                (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
                let newIndex = gsap.utils.wrap(0, length, index),
                    time = times[newIndex];
                if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
                    vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
                    time += tl.duration() * (index > curIndex ? 1 : -1);
                }
                curIndex = newIndex;
                vars.overwrite = true;
                return tl.tweenTo(time, vars);
            }
            tl.next = vars => toIndex(curIndex + 1, vars);
            tl.previous = vars => toIndex(curIndex - 1, vars);
            tl.current = () => curIndex;
            tl.toIndex = (index, vars) => toIndex(index, vars);
            tl.times = times;
            tl.progress(1, true).progress(0, true); // pre-render for performance
            if (config.reversed) {
                tl.vars.onReverseComplete();
                tl.reverse();
            }
            return tl;
        }



        if (!window.matchMedia("only screen and (max-width: 760px)").matches) {
            new SplitType(".title-projects");
            new SplitType(".title-blog");
            new SplitType(".container-projects .list-projects .project-name");
            new SplitType(".container-projects .list-projects .project-description");

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

            let ScrollContainer = document.querySelector('.container-projects .list-projects');
            let Btn = document.querySelector('.title-projects');
            Btn.addEventListener('click', () => {
                gsap.to(ScrollContainer, { scrollLeft: '+=500', duration: 1.0, ease: "power2.out" });
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
                                <img src="proj_1.png" alt="Project 1"  draggable="false"/>
                            </div>
                            <div className="project-info">
                                <div className="project-name">Project 1</div>
                                <div className="project-description">This is the bestr ptoject that has been done in many time</div>
                            </div>
                        </div>

                        <div className="project project-2">
                            <div className="container-img">
                                <img src="proj_1.png" alt="Project 2"  draggable="false"/>
                            </div>
                            <div className="project-info">
                                <div className="project-name">Project 2</div>
                                <div className="project-description">This is the bestr ptoject that has been done in many time</div>
                            </div>
                        </div>

                        <div className="project project-3">
                            <div className="container-img">
                                <img src="proj_1.png" alt="Project 3" draggable="false"/>
                            </div>
                            <div className="project-info">
                                <div className="project-name">Project 3</div>
                                <div className="project-description">This is the bestr ptoject that has been done in many time</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-gallery">

                    <div className="wrapper">
                        <div className="box">1</div>
                        <div className="box">2</div>
                        <div className="box">3</div>
                        <div className="box">4</div>
                        <div className="box">5</div>
                        <div className="box">6</div>
                        <div className="box">7</div>
                        <div className="box">8</div>
                        <div className="box">9</div>
                        <div className="box">10</div>
                        <div className="box">11</div>
                    </div>
                </div>

                <div className="container-blog">
                    <div className="title-blog">
                        Blog
                    </div>
                    <div className="content-blog">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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

