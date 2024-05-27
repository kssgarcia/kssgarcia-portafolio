import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import '../css/Post.css';

const Post = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, link, description, scrollY } = location.state;

    const handleBack = () => {
        navigate('/kssgarcia-portafolio/', { state: { scrollY } });
    };

    useEffect(() => {
        gsap.to('#cursor', {
            scale: 1,
        });

        gsap.to('#svg-cursor', {
            transform: "scale3d(0, 0, 0) rotate(45deg)",
        });

        window.scrollTo(0, 0);
    }, []);

    const updateImageUrls = (htmlString, oldBaseUrl, newBaseUrl) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const images = doc.querySelectorAll('img');

        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src && src.startsWith(oldBaseUrl)) {
                const newSrc = src.replace(oldBaseUrl, newBaseUrl);
                img.setAttribute('src', newSrc);
            }
        });

        return doc.body.innerHTML;
    };

    const oldBaseUrl = 'https://kssgarcia.github.io/BlogPersonal/BlogPersonal/';
    const newBaseUrl = 'https://raw.githubusercontent.com/kssgarcia/BlogPersonal/main/static/';
    const updatedDescription = updateImageUrls(description, oldBaseUrl, newBaseUrl);

    return (
        <div id="post">
            <div className="project-container">
                <div className="img-part">
                    <div className="box-image">
                    </div>
                    <div className="title">{title}</div>
                </div>
                <div className="post-content">
                    <div dangerouslySetInnerHTML={{ __html: updatedDescription }}></div>
                </div>
            </div>
            <div className="back-main" onClick={handleBack}></div>
        </div>
    );
}

export default Post;
