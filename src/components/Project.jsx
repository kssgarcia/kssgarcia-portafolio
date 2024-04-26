import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Transition from './Transition.jsx';
import '../css/Project.css';

const Project = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { key, image, description, scrollY } = location.state;

    const handleBack = () => {
        navigate( '/kssgarcia-portafolio/', {state: { scrollY }} );
    };

    return (
        <div id="project">
            <div className="project-container">
                <div className="img-part">
                <img src={`/kssgarcia-portafolio/${image}`} alt={key} />
                    <div className="title">{key}</div>
                </div>
                <div className="content">
                    <p>{description}</p>
                    <button onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    );
}
export default Project;