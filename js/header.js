import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import React, {Component} from "react";
import {Trans, withTranslation} from "react-i18next";

class HeaderDiv extends Component {
    render() {
        const { t, i18n } = this.props;

        return (
            <div className="header">
                     <div className="wrapper">
                         <div className="logo"><a href="/"> <Trans> {t("logo1")} </Trans> <FontAwesomeIcon icon={faPaw} /> <Trans> {t("logo2")} </Trans></a></div>
                         <div className="menu">
                             <ul>
                                 <li><NavLink exact to="/" className="decor"><Trans> {t("menu1")} </Trans></NavLink></li>
                                 <li><NavLink exact to='/portfolio' className="decor"><Trans> {t("menu2")} </Trans></NavLink></li>
                                 <li><NavLink exact to='/passions' className="decor"><Trans> {t("menu3")} </Trans></NavLink></li>
                                 <li><NavLink exact to='/offer' className="decor"><Trans> {t("menu4")} </Trans></NavLink></li>
                                 <li><NavLink exact to='/contact' className="decor"><Trans> {t("menu5")} </Trans></NavLink></li>
                             </ul>
                         </div>
                     </div>
            </div>
        );
    }
}

export default withTranslation("translations")(HeaderDiv);

// const headerDiv = <div className="header">
//     <div className="wrapper">
//         <div className="logo"><a href="/"> Moments <FontAwesomeIcon icon={faPaw} /> trace</a></div>
//         <div className="menu">
//             <ul>
//                 <li><NavLink exact to="/" className="decor">Home</NavLink></li>
//                 <li><NavLink exact to='/portfolio' className="decor">My portfolio</NavLink></li>
//                 <li><NavLink exact to='/passions' className="decor">My passions</NavLink></li>
//                 <li><NavLink exact to='/offer' className="decor">Offer</NavLink></li>
//                 <li><NavLink exact to='/contact' className="decor">Contact</NavLink></li>
//             </ul>
//         </div>
//     </div>
// </div>;
//
//     export default headerDiv;