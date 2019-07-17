import React, {Component} from "react";
import ReactDOM from "react-dom";
import Gallery from "react-photo-gallery";
import {photos} from "./photos/world";

const Photo = () => <Gallery photos={photos} direction={"column"} />;
export default Photo;
