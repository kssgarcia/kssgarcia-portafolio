import React from 'react';
import App from './App.jsx'
import Project from './Project.jsx'
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const AnimateRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/kssgarcia-portafolio/" element={<App />} />
                <Route path="/kssgarcia-portafolio/project/:id" element={<Project />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimateRoutes;