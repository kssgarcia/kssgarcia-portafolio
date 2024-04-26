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
    const slideIn = useRef(null);
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
        gsap.to(slideIn.current, { scaleY: 0, duration: 1, ease: "custom", delay: 2 })
    }, []);

    return (
        <div ref={container} >
            <div className="slide-in" ref={slideIn} style={{
                position: 'fixed',
                zIndex: 999,
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                transformOrigin: 'top'
            }}></div>
            <div className="slide-out" ref={slideOut} style= {{
                display: 'grid',
                placeItems: 'center',
            }}
            >
                <div className="title-transition" style={{
                    position: 'fixed',
                    top: '40vh',
                    left: '40vw',
                    transform: 'translate(-50 %, -50 %)',
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