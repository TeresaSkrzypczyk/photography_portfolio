import React from "react";
import ReactDOM from "react-dom";
import Gallery from "react-grid-gallery";
import { wedding, wedding_outdoor, baptism, family, pregnancy } from "./photos/work";

function Work() {
    const style = { display: "block",
        minHeight: "1px",
        maxWidth: "100%",
        overflow: "auto",
        marginLeft: "auto",
        marginRight: "auto"};
    return (
        <>
            <div style={style}>
                <h3>Wedding</h3>
                <Gallery
                    images={wedding}
                    enableLightbox={true}
                    margin = {4}
                    backdropClosesModal
                />
            </div><br />
            <div style={style}>
                <h3>Wedding outdoor session</h3>
                <Gallery
                    images={wedding_outdoor}
                    enableLightbox={true}
                    margin = {4}
                    backdropClosesModal
                />
            </div><br />
            <div style={style}>
                <h3>Session outdoor - pregnancy</h3>
                <Gallery
                    images={pregnancy}
                    enableLightbox={true}
                    margin = {4}
                    backdropClosesModal
                />
            </div><br />
            <div style={style}>
                <h3>Special occasion - baptism</h3>
                <Gallery
                    images={baptism}
                    enableLightbox={true}
                    margin = {4}
                    backdropClosesModal
                />
            </div><br />
            <div style={style}>
            <h3>Session outdoor - family time</h3>
            <Gallery
                images={family}
                enableLightbox={true}
                margin = {4}
                backdropClosesModal
            />
        </div>
            </>
    );
}

export default Work;




