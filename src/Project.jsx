import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './css/Project.css';

const Project = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { key, image, description } = location.state;

    const handleBack = () => {
        navigate(-1);  
    };

    return (
        <div id="project">
            <div className="project-container">
                <img src={`/kssgarcia-portafolio/${image}`} alt={key} />
                <div className="content">
                    <div className="title">{key}</div>
                    <p>{description}</p>
                    <button onClick={handleBack}>Back</button> 
                </div>
            </div>
        </div>
    );
};

export default Project;