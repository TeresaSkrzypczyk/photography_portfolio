import React, {Component} from "react";
import ReactDOM from "react-dom";

function Welcome() {
    return (<>
        <div>
            <h1 className="text_h1">Hello! Welcome on my page!</h1>
            <p className="text_p">I'm really glad that you're here!</p>
            <p className="text_p">This page is a presentation of the beauty of this world, which always touch my heart very deeply.</p>
            <p className="text_p">Sit comfortable, take your favourite cup of coffee or tee and catch the moments.</p>
            <p className="text_p">Photography is my passion,but also it's my work,</p>
            <p className="text_p">so if you're looking for someone to keep special moments for you contact with me!</p><br />
        </div>
        <div>
            <img src="../img/me.jpg" className="main_photo"/>
        </div>
        </>)
}

export default Welcome;