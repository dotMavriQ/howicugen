import React from "react";
import html2canvas from "html2canvas";

function DownloadButton({ images }) {
  const handleDownload = async () => {
    const gridElement = document.querySelector(".grid");
    const canvas = await html2canvas(gridElement, { useCORS: true });
    const link = document.createElement("a");
    link.download = "how-i-see-you.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <button className="download-btn" onClick={handleDownload}>
      Download Your Challenge
    </button>
  );
}

export default DownloadButton;
