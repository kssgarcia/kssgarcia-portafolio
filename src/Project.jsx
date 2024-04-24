import React from 'react';
import './Project.css';

const Project = ({ project }) => {
    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
    );
};

export default Project;