import React, { useState } from "react";
import { motion } from "framer-motion";
import ResizedImageBox from "../ResizedImageBox/ResizedImageBox";
import "./Home.css";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [resizedImages, setResizedImages] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSubmit = () => {
    // Handle file submission and resizing logic here
    // Simulate resized images for demonstration
    const resizedImages = [
      { url: previewUrl, width: 200, height: 300 },
      { url: previewUrl, width: 400, height: 600 },
    ];
    setResizedImages(resizedImages);
  };

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Passport Photo Editor</h1>
      <input type="file" className="form-control" onChange={handleFileUpload} />
      {previewUrl && (
        <div className="preview-container">
          <img src={previewUrl} alt="Preview" className="preview-image" />
          <button className="btn btn-success" onClick={handleFileSubmit}>
            Upload
          </button>
        </div>
      )}
      <div className="resized-images-container">
        {resizedImages.map((image, index) => (
          <ResizedImageBox key={index} image={image} />
        ))}
      </div>
    </motion.div>
  );
}

export default Home;
