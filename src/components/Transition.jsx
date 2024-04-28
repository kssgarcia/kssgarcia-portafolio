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
                }}>
                    {title}
                </div>
            </div>
            {displayChildren}
        </div>
    );
}

export default Transition;