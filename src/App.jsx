import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

function App() {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        new SplitType(".title-1");
        new SplitType(".title-2");
        new SplitType(".title-3");

        gsap.to(".words", { opacity: 1, delay: 1.5 });
        gsap.to('.front-titles .char', { y: 0, opacity: 1, stagger: 0.05, duration: 1 });

        if (!window.matchMedia("only screen and (max-width: 760px)").matches) {
            new SplitType(".title-projects");
            new SplitType(".title-blog");
            new SplitType(".title-foot");
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
            gsap.to('.container-foot .title-foot .char', {
                scrollTrigger: { trigger: '.container-foot .title-foot', start: 'top bottom', end: 'top bottom', toggleActions: 'restart none reverse none' },
                y: 0, opacity: 1, stagger: 0.01, duration: 0.5
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
                                <img src="proj_1.png" alt="Project 1" />
                            </div>
                            <div className="project-info">
                                <div className="project-name">Project 1</div>
                                <div className="project-description">This is the bestr ptoject that has been done in many time</div>
                            </div>
                        </div>

                        <div className="project project-2">
                            <div className="container-img">
                                <img src="proj_1.png" alt="Project 2" />
                            </div>
                            <div className="project-info">
                                <div className="project-name">Project 1</div>
                                <div className="project-description">This is the bestr ptoject that has been done in many time</div>
                            </div>
                        </div>

                        <div className="project project-3">
                            <div className="container-img">
                                <img src="proj_1.png" alt="Project 3" />
                            </div>
                            <div className="project-info">
                                <div className="project-name">Project 1</div>
                                <div className="project-description">This is the bestr ptoject that has been done in many time</div>
                            </div>
                        </div>
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
                    <div className="title-foot">
                        Do you have some question or a project to share?
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

