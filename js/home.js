import React, {Component} from "react";
import ReactDOM from "react-dom";

class Welcome extends Component {
    render() {
        return (<>
            <div>
                <h1 className="text_h1">Hello! Welcome on my page!</h1>
                <p className="text_p">I'm really glad that you're here!</p>
                <br />
                <p className="text_p">This page is all about the beauty of this world, which always touches my heart.<br />Sit comfortably, take your favourite cup of coffee or tee and catch the moments with me.<br />
                    Photography is my passion, but it's also my work, <br />so if you're looking for someone to catch your special moments for you, just contact me!</p><br />
            </div>
            <div className="main_photo">
                <img className="color_photo" src="../img/mecolor.jpg" />
                <img className="monochromatic_photo" src="../img/me.jpg" />
            </div>
        </>)
    }
}

export default Welcome;

