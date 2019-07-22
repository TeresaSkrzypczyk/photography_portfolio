import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import ContactForm from './form';
import Offer from './offer';
import Welcome from './home';
import Photo from './passions';
import Work from './portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faPaw, faMugHot, faHeart, faCopyright} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faInstagram, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";

const mobileDiv = <div className="mobile-section">
    <button className="mobile-button"><FontAwesomeIcon icon={faBars} /></button>
    <ul className="mobile-menu">
        <li><NavLink exact to="/" className="mobile-decor">Home</NavLink></li>
        <li><NavLink exact to='/portfolio' className="mobile-decor">My portfolio</NavLink></li>
        <li><NavLink exact to='/passions' className="mobile-decor">My passions</NavLink></li>
        <li><NavLink exact to='/offer' className="mobile-decor">Offer</NavLink></li>
        <li><NavLink exact to='/contact' className="mobile-decor">Contact</NavLink></li>
    </ul>
    <a href="/" className="mobile-logo"> Moments <FontAwesomeIcon icon={faPaw} /> trace</a>
</div>;

const headerDiv = <div className="header">
    <div className="wrapper">
        <div className="logo"><a href="/"> Moments <FontAwesomeIcon icon={faPaw} /> trace</a></div>
        <div className="menu">
            <ul>
                <li><NavLink exact to="/" className="decor">Home</NavLink></li>
                <li><NavLink exact to='/portfolio' className="decor">My portfolio</NavLink></li>
                <li><NavLink exact to='/passions' className="decor">My passions</NavLink></li>
                <li><NavLink exact to='/offer' className="decor">Offer</NavLink></li>
                <li><NavLink exact to='/contact' className="decor">Contact</NavLink></li>
            </ul>
        </div>
    </div>
</div>;

const footerDiv = <div className="footer">
    <div>
        <p className="footer_text">Sit with me, take <FontAwesomeIcon icon={faMugHot} /> and catch the moments <FontAwesomeIcon icon={faHeart} /></p>
    </div>
    <div>
        <a href="https://www.instagram.com/te.skrzypczyk/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon_media"/></a>
        <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} className="icon_media"/></a>
        <a href="https://www.facebook.com/tereska.skrzypczyk" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} className="icon_media"/></a>
    </div>
    <div>
        <p><FontAwesomeIcon icon={faCopyright} /> Teresa Ziółkowska 2019 </p>
    </div>
</div>;


class Portfolio extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    {mobileDiv}{headerDiv}

                    <h1 className="text_h1">My portfolio</h1>
                    <Route exact path='/portfolio' component={Work} /><br />

                    {footerDiv}
                </div>
            </>
        );
    }
}

class Passions extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    {mobileDiv}{headerDiv}

                    <h1 className="text_h1">My passions</h1>
                    <h3 className="text_h3">City, Landscape, Nature, People</h3>
                    <p className="text_p">We're surrounded by a beautiful world.<br />Sometimes it's just enough to stop and open your eyes.</p>
                    <br /><Route exact path='/passions' component={Photo} />

                    {footerDiv}
                </div>
            </>
        );
    }
}

class PriceList extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    {mobileDiv}{headerDiv}

                    <h1 className="text_h1">Offer</h1>
                    <Route exact path='/offer' component={Offer} />

                    {footerDiv}
                </div>
            </>
        );
    }
}

class Contact extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    {mobileDiv}{headerDiv}

                    <h1 className="text_h1">Send me a message</h1>
                    <Route exact path='/contact' component={ContactForm} />

                    {footerDiv}
                </div>
            </>
        );
    }
}

class Main extends Component{
    render() {
        return (
                <>
                    <div className="wrapper">
                        {mobileDiv}{headerDiv}

                        <Route exact path='/' component={Welcome} />

                        {footerDiv}
                    </div>
                </>
        );
    }
}

class App extends Component {
    render() {
        return <HashRouter>
            <>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/portfolio' component={Portfolio} />
                    <Route exact path='/passions' component={Passions} />
                    <Route exact path='/offer' component={PriceList} />
                    <Route exact path='/contact' component={Contact} />
                    <Route path='*' component={Main}/>
                </Switch>
            </>
        </HashRouter>;
    }
}

ReactDOM.render(<App />, document.getElementById("app"));