import React, {Component} from "react";
import ReactDOM from "react-dom";

const style = {
    display: "block",
    maxWidth: "100%"
};

function Welcome() {
    return (<>
        <div>
            <h1>Hello! Welcome on my page!</h1>
            <p>I'm really glad that you're here! <br /> This page is a presentation of the beauty of this world, which always touch my heart very deeply.<br />
                Sit comfortable, take your favourite cup of coffee or tee and move here. <br />
                Photography is my passion, <br /> but also it's my work, <br /> so if you're looking for someone to keep special moments for you contact with me!</p>
        </div>
        <div>
            <img src="../img/me.jpg" style={style}/>
        </div>
        </>)
}

export default Welcome;