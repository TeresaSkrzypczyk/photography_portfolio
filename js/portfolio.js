import React from "react";
import ReactDOM from "react-dom";
import Gallery from "react-grid-gallery";
import { works } from "./photos/work";

function Work() {
    return (
        <Gallery
            images={works}
            enableLightbox={true}
            maxRows={3}
            backdropClosesModal
            // currentImage={3}
            // isOpen={ true}
        />
    );
}

export default Work;