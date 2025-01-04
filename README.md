# How I See You Generator

A responsive web app that lets users create a **3x3 grid** for the popular "How I See You" challenge. Users can upload and crop images for each square, then download the final grid image.

## Features

- **Responsive 3x3 Grid**: Perfectly square grid boxes that adjust to different screen sizes.
- **Image Upload with Cropping**: Users can upload and crop images with a locked square (1x1) ratio.
- **Double-Click Cropping**: Finalize and save cropped images by double-clicking the crop area.
- **Downloadable Final Image**: The app generates and allows downloading the completed grid as a single image.

---

## Live Demo

The app is hosted on GitHub Pages:  
[https://dotMavriQ.github.io/howicugen](https://dotMavriQ.github.io/howicugen)

---

## Installation & Usage

To set up the project locally, follow these steps:

### 1. Clone the Repository
```
git clone git@github.com:dotMavriQ/howicugen.git
cd howicugen
```

### 2. Install Dependencies
```
npm install
```

### 3. Run the App Locally
```
npm start
```

The app will open in your browser at `http://localhost:3000`.

### 4. Deploy to GitHub Pages
To deploy your changes:
```
npm run deploy
```

This will build the app and push it to the `gh-pages` branch.

---

## Project Structure

The main files and folders are organized as follows:

```
howicugen/
├── public/                 # Static files (logo.svg, favicon, etc.)
├── src/                    # React source code
│   ├── components/         # Reusable components (Grid, UploadModal, etc.)
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point for React
│   ├── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation (this file)
```

---

## Built With

- **React**: Frontend framework for building the app.
- **react-easy-crop**: Provides the cropping functionality.
- **html2canvas**: Used for generating a downloadable image of the grid.
- **GitHub Pages**: For hosting the app.

---

## How to Use

1. **Upload Images**: Click on a grid square to upload an image.  
2. **Crop Images**: Resize or reposition the image in the cropping modal.  
3. **Save the Crop**: Double-click inside the crop area to save the image.  
4. **Download Grid**: After all 9 images are uploaded, click the "Download Your Challenge" button to save the final grid image.

---

## License

This project is open-source under the [MIT License](https://opensource.org/licenses/MIT).
