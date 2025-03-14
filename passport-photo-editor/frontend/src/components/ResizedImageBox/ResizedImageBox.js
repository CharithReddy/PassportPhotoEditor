import React from "react";
import "./ResizedImageBox.css";
function ResizedImageBox({ image }) {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = image.url;
    link.download = `resized-${image.width}x${image.height}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="resized-image-box">
      <img src={image.url} alt="Resized" className="resized-image" />
      <button className="btn btn-primary" onClick={downloadImage}>
        Download
      </button>
    </div>
  );
}
export default ResizedImageBox;
