import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import "../css/Post.css";

const Post = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, link, description, scrollY } = location.state;

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

  const updateImageUrls = (htmlString, oldBaseUrl, newBaseUrl) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const images = doc.querySelectorAll("img");

    images.forEach((img) => {
      const src = img.getAttribute("src");
      if (src && src.startsWith(oldBaseUrl)) {
        const newSrc = src.replace(oldBaseUrl, newBaseUrl);
        img.setAttribute("src", newSrc);
      }
    });

    return doc.body.innerHTML;
  };

  const renderDescription = (description) => {
    const regex = /(\$\$[^$]+\$\$|\$[^$]+\$)/g;
    let match;
    let lastIndex = 0;
    const elements = [];

    while ((match = regex.exec(description)) !== null) {
      const textBefore = description.slice(lastIndex, match.index);
      const latex = match[0];

      if (textBefore) {
        elements.push(
          <span
            key={`text-${lastIndex}`}
            dangerouslySetInnerHTML={{ __html: textBefore }}
          />,
        );
      }

      if (latex.startsWith("$$")) {
        const formula = latex.slice(2, -2);
        elements.push(
          <BlockMath key={`block-${lastIndex}`}>{formula}</BlockMath>,
        );
      } else {
        const formula = latex.slice(1, -1);
        elements.push(
          <InlineMath key={`inline-${lastIndex}`}>{formula}</InlineMath>,
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < description.length) {
      const textAfter = description.slice(lastIndex);
      elements.push(
        <span
          key={`text-${lastIndex}`}
          dangerouslySetInnerHTML={{ __html: textAfter }}
        />,
      );
    }

    return elements;
  };

  const oldBaseUrl = "https://kssgarcia.github.io/BlogPersonal/BlogPersonal/";
  const newBaseUrl =
    "https://raw.githubusercontent.com/kssgarcia/BlogPersonal/main/static/";
  const updatedDescription = updateImageUrls(
    description,
    oldBaseUrl,
    newBaseUrl,
  );

  return (
    <div id="post">
      <div className="post-container">
        <div className="title">{title}</div>
        <div className="post-content">
          {renderDescription(updatedDescription)}
        </div>
      </div>
      <div className="back-main" onClick={handleBack}></div>
    </div>
  );
};

export default Post;
