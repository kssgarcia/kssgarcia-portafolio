import React, { useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Transition({children}) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const container = useRef(null);

    useGSAP(() => {
        if (children.key !== displayChildren.key) {
            gsap.to(container.current, { opacity: 0, duration: 1 }).then(() => {
                setDisplayChildren(children);

                gsap.to(container.current, { opacity: 1, duration: 1 })
            });
        };
    }, [children]);


    return (
        <div ref={container}>  
            {displayChildren}
        </div>  
    );
}

export default Transition;