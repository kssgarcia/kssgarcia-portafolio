import React from 'react';
import { motion } from 'framer-motion';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

function Transition({children}) {
    const anim = {
        initial: 'initial',
        animate: 'enter',
        exit: 'exit',
    }

    return (
        <div>
        <motion.div
        className='slide-in'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition= {{ duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        ></motion.div>

        <motion.div
        className='slide-out'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition= {{ duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        ></motion.div>

        <motion.div {...anim}>
        {children}
        </motion.div>
        </div>
    );
}

export default Transition;