import React, { useState } from "react";
import Cropper from "react-easy-crop";
import "./ImageUploadModal.css";

function ImageUploadModal({ onSave, onClose }) {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleCropComplete = (_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels); // Store cropped dimensions
  };

  const cropImage = async () => {
    if (!image || !croppedAreaPixels) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = image;

    await new Promise((resolve) => (img.onload = resolve));

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    const croppedImage = canvas.toDataURL("image/jpeg");
    onSave(croppedImage); // Save cropped image
  };

  const handleDoubleClick = async () => {
    await cropImage(); // Perform cropping on double-click
    onClose(); // Close the modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        {!image ? (
          <div className="upload-container">
            <p>Select an image to upload:</p>
            <input type="file" onChange={handleFileChange} />
          </div>
        ) : (
          <div className="crop-container" onDoubleClick={handleDoubleClick}>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1} // Lock aspect ratio to 1:1
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={handleCropComplete}
            />
            <p>Double-click inside the crop area to save.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUploadModal;
