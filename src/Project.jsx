import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './css/Project.css';

const Project = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { key, image, description } = location.state;

    const handleBack = () => {
        navigate( '/kssgarcia-portafolio/' );
    };

    return (
        <motion.div 
        id="project"
        className='project-pro'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        >
            <div className="project-container">
                <img src={`/kssgarcia-portafolio/${image}`} alt={key} />
                <div className="content">
                    <div className="title">{key}</div>
                    <p>{description}</p>
                    <button onClick={handleBack}>Back</button> 
                </div>
            </div>
        </motion.div>
    );
};

export default Project;