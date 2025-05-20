import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import "../css/Project.css";

const Project = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { key, image, description, number, topics, scrollY } = location.state;

  const handleBack = () => {
    navigate("/kssgarcia-portafolio/", { state: { scrollY } });
  };

  useEffect(() => {
    gsap.to("#cursor", {
      scale: 1,
    });

    gsap.to("#svg-cursor", {
      transform: "scale3d(0, 0, 0) rotate(45deg)",
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="project">
      <div className="project-container">
        <div className="img-part">
          <div className="box-image">
            <img src={`/kssgarcia-portafolio/${image}`} alt={key} />
          </div>
          <div className="number">{number}</div>
          <div className="topics">{topics}</div>
          <div className="title">{key}</div>
        </div>
        <div className="content">
          <p>{description}</p>
        </div>
      </div>
      <div className="back-main" onClick={handleBack}></div>
    </div>
  );
};
export default Project;
