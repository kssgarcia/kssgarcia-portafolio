import React, { useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(useGSAP, CustomEase);
CustomEase.create("custom", "M0,0 C0.76,0 0.24,1 1,1");

function Transition({ children }) {
    const location = useLocation();
    const [title, setTitle] = useState(undefined);

    const [displayChildren, setDisplayChildren] = useState(children);
    const container = useRef(null);
    const slideOut = useRef(null);

    useGSAP(() => {
        if (children.key !== displayChildren.key) {
            if (location.state && location.state.key) {
                setTitle(location.state.key);
            } else {
                setTitle('Main');
            }
            gsap.to(slideOut.current, { scaleY: 1, duration: 1, ease: "custom" }).then(() => {
                setDisplayChildren(children);
                gsap.to(slideOut.current, { scaleY: 0, duration: 1, delay: 0.4, ease: "custom" })
            });
        }
    }, [children]);

    useGSAP(() => {
        const slideIn = document.querySelector('.slide-in');
        const slideInChildren = document.querySelector('.slide-in .title-enter');
        gsap.to(slideIn, { scaleY: 0, duration: 1, ease: "custom", delay: 2 })
        gsap.to(slideInChildren, { opacity: 1, duration: 1, ease: "custom", delay: 0.5 })


        if (!window.matchMedia("only screen and (max-width: 1000px)").matches) {
            gsap.set("#cursor", { xPercent: -50, yPercent: -50 });

            let xTo = gsap.quickTo("#cursor", "x", { duration: 0.6, ease: "power3" }),
                yTo = gsap.quickTo("#cursor", "y", { duration: 0.6, ease: "power3" });

            window.addEventListener("mousemove", e => {
                xTo(e.clientX);
                yTo(e.clientY);
            });
        }
    }, []);

    return (
        <div ref={container} >
            <div className="slide-out" ref={slideOut} style={{
                display: 'grid',
                placeItems: 'center',
            }}
            >
                <div className="title-transition" style={{
                    position: 'fixed',
                    zIndex: 1000,
                    textAlign: 'center',
                }}>
                    {title}
                </div>
            </div>
            <div id="cursor" style={{
                position: 'fixed',
                zIndex: 10,
                top: 0,
                left: 0,
                width: '15px',
                height: '15px',
                borderRadius: '100%',
                backgroundColor: 'rgb(255,252,225)',
            }}>
                <img style={{
                transform: 'scale3d(0, 0, 0)'
            }}
                id="svg-cursor" src="/kssgarcia-portafolio/cursor.svg" alt="Cursor" />
            </div>
            {displayChildren}
        </div>
    );
}

export default Transition;