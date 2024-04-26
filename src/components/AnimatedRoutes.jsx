import React from 'react';
import App from './App.jsx'
import Project from './Project.jsx'
import Transition from './Transition.jsx'
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


const AnimateRoutes = () => {
    const location = useLocation();

    return (
        <Transition>
            <Routes location={location} key={location.pathname}>
                <Route path="/kssgarcia-portafolio/" element={<App />} />
                <Route path="/kssgarcia-portafolio/project/:id" element={<Project />} />
            </Routes>
        </Transition>
    );
};

export default AnimateRoutes;