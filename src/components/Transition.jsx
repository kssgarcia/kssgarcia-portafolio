import React from 'react';
import { motion } from 'framer-motion';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

function Transition({children}) {
    const anim = {
        initial: 'initial',
        animate: 'enter',
        exit: 'exit',
    }

    const opacity = {
        initial : { opacity: 0 },
        animate : { opacity: 1 },
        exit : { opacity: 0 },
        transition : { duration: 0.5 }
    }

    const slite_in = {
        initial : { opacity: 1 },
        animate : { opacity: 1 },
        exit : { opacity: 0 },
        transition : { duration: 0.5 }
    }

    return (
        <div>
        <motion.div
        className='slide-in'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>

        <motion.div
        className='slide-out'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>

        <motion.div {...anim}>
        {children}
        </motion.div>
        </div>
    );
}

export default Transition;