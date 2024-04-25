import React from 'react';
import { motion } from 'framer-motion';

function Transition({children}) {
    return (
        // <motion.div
        // className='slide-in'
        // initial={{ scaleY: 0 }}
        // animate={{ scaleY: 0 }}
        // exit={{ scaleY: 1 }}
        // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        // ></motion.div>

        // <motion.div
        // className='slide-out'
        // initial={{ scaleY: 1 }}
        // animate={{ scaleY: 0 }}
        // exit={{ scaleY: 0 }}
        // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        // ></motion.div>
        <motion.div 
        id="project"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
        {children}

        </motion.div>
    );
}

export default Transition;