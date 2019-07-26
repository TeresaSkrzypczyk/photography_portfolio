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
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import MobileDiv from "./mobile";
import HeaderDiv from "./header";
import FooterDiv from "./footer";

// const footerDiv = <div className="footer">
//     <div>
//         <p className="footer_text">Sit with me, take <FontAwesomeIcon icon={faMugHot} /> and catch the moments <FontAwesomeIcon icon={faHeart} /></p>
//     </div>
//     <div>
//         <a href="https://www.instagram.com/te.skrzypczyk/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon_media"/></a>
//         <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} className="icon_media"/></a>
//         <a href="https://www.facebook.com/tereska.skrzypczyk" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} className="icon_media"/></a>
//     </div>
//     <div>
//         <p><FontAwesomeIcon icon={faCopyright} /> Teresa Ziółkowska 2019 </p>
//     </div>
// </div>;

class Portfolio extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    <MobileDiv /><HeaderDiv />

                    <Route exact path='/portfolio' component={Work} /><br />

                    <FooterDiv />
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
                    <MobileDiv /><HeaderDiv />

                    <br /><Route exact path='/passions' component={Photo} />

                    <FooterDiv />
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
                    <MobileDiv /><HeaderDiv />

                    <h1 className="text_h1">Offer</h1>
                    <Route exact path='/offer' component={Offer} />

                    <FooterDiv />
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
                    <MobileDiv /><HeaderDiv />

                    <Route exact path='/contact' component={ContactForm} />

                    <FooterDiv />
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
                        <MobileDiv /><HeaderDiv />

                        <Route exact path='/' component={Welcome} />

                        <FooterDiv />
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

ReactDOM.render( <I18nextProvider i18n={i18n}><App /></I18nextProvider>, document.getElementById("app"));