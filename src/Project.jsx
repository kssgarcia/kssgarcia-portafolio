import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Project.css';

const Project = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { key, image, description } = location.state;

    const handleBack = () => {
        navigate(-1);  
    };

    return (
        <div id="container">
            <div className="container-project">
                <img src={image} alt={key} />
                <h1>{key}</h1>
                <p>{description}</p>
                <button onClick={handleBack}>Back</button>  // Button to trigger back navigation
            </div>
        </div>
    );
};

export default Project;