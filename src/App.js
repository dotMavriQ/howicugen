import React, { useState } from "react";
import GridComponent from "./components/GridComponent";
import DownloadButton from "./components/DownloadButton";

function App() {
  const [images, setImages] = useState(Array(9).fill(null)); // 9 placeholders for images

  const handleImageChange = (index, croppedImage) => {
    const updatedImages = [...images];
    updatedImages[index] = croppedImage;
    setImages(updatedImages);
  };

  return (
    <div className="App">
      <h1>How I See You Challenge</h1>
      <GridComponent images={images} onImageChange={handleImageChange} />
      <DownloadButton images={images} />
    </div>
  );
}

export default App;
