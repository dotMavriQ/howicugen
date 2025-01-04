import React, { useState } from "react";
import ImageUploadModal from "./ImageUploadModal";

const labels = ["Animal", "Place", "Plant", "Character", "Season", "Hobby", "Color", "Crystal", "Food"];

function GridComponent({ images, onImageChange }) {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleUpload = (index) => {
    setSelectedBox(index); // Open modal for selected square
  };

  const handleCloseModal = () => {
    setSelectedBox(null); // Close modal
  };

  return (
    <div className="grid">
      {labels.map((label, index) => (
        <div key={index} className="grid-item" onClick={() => handleUpload(index)}>
          <p>{label}</p>
          {images[index] ? (
            <img src={images[index]} alt={label} />
          ) : (
            <p className="upload-placeholder">Click to Upload</p>
          )}
        </div>
      ))}
      {selectedBox !== null && (
        <ImageUploadModal
          index={selectedBox}
          onSave={(image) => {
            onImageChange(selectedBox, image);
            handleCloseModal();
          }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default GridComponent;
