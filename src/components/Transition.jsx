import React, { useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Transition({children}) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const container = useRef(null);
    const slideIn = useRef(null);
    const slideOut = useRef(null);

    useGSAP(() => {
        if (children.key !== displayChildren.key) {
            gsap.to(slideOut.current, { scaleY: 1, duration: 1 }).then(() => {
                setDisplayChildren(children);
                gsap.to(slideOut.current, { scaleY: 0, duration: 1, delay: 0.4})
            });
        }  
       }, [children]);

    useGSAP(() => {
        gsap.to(slideIn.current, { scaleY: 0, duration: 1, delay: 1 }) 
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
            <div className="slide-out" ref={slideOut}></div>
            {displayChildren}
        </div>  
    );
}

export default Transition;