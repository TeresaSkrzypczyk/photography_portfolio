import React, {Component} from "react";
import ReactDOM from "react-dom";

class Welcome extends Component {
    state = {
        img: "../img/me.jpg"
    };

    render() {
        return (<>
            <div>
                <h1 className="text_h1">Hello! Welcome on my page!</h1>
                <p className="text_p">I'm really glad that you're here!</p>
                <p className="text_p">This page is all about the beauty of this world, which always touches my heart.</p>
                <p className="text_p">Sit comfortably, take your favourite cup of coffee or tee and catch the moments with me.</p>
                <p className="text_p">Photography is my passion, but it's also my work,</p>
                <p className="text_p">so if you're looking for someone to catch your special moments for you, just contact me!</p><br />
            </div>
            <div>
                <img className="main_photo" src={this.state.img}
                     onMouseEnter={() => {
                         this.setState({
                             img: "../img/mecolor.jpg"
                         })
                     }}

                     onMouseOut={() => {
                         this.setState({
                             img: "../img/me.jpg"
                         })
                     }}
                />
            </div>
        </>)
    }
}

export default Welcome;