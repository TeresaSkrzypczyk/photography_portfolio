import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faPaw} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import React, {Component} from "react";

import {Trans, withTranslation} from "react-i18next";
import PropTypes from "prop-types";

class MobileDiv extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value: "en"
        };
    }

    render() {
        const { t, i18n } = this.props;

        return (
            <div className="mobile-section">
                <button className="mobile-button"><FontAwesomeIcon icon={faBars} /></button>
                <ul className="mobile-menu">
                    <li><NavLink exact to="/" className="mobile-decor"><Trans> {t("menu1")} </Trans></NavLink></li>
                    <li><NavLink exact to='/portfolio' className="mobile-decor"><Trans> {t("menu2")} </Trans></NavLink></li>
                    <li><NavLink exact to='/passions' className="mobile-decor"><Trans> {t("menu3")} </Trans></NavLink></li>
                    <li><NavLink exact to='/offer' className="mobile-decor"><Trans> {t("menu4")} </Trans></NavLink></li>
                    <li><NavLink exact to='/contact' className="mobile-decor"><Trans> {t("menu5")} </Trans></NavLink></li>
                </ul>
                <a href="/" className="mobile-logo"> <Trans> {t("logo1")} </Trans> <FontAwesomeIcon icon={faPaw} /> <Trans> {t("logo2")} </Trans></a>
            </div>
        );
    }
}

// const mobileDiv = <div className="mobile-section">
//     <button className="mobile-button"><FontAwesomeIcon icon={faBars} /></button>
//     <ul className="mobile-menu">
//         <li><NavLink exact to="/" className="mobile-decor">Home</NavLink></li>
//         <li><NavLink exact to='/portfolio' className="mobile-decor">My portfolio</NavLink></li>
//         <li><NavLink exact to='/passions' className="mobile-decor">My passions</NavLink></li>
//         <li><NavLink exact to='/offer' className="mobile-decor">Offer</NavLink></li>
//         <li><NavLink exact to='/contact' className="mobile-decor">Contact</NavLink></li>
//     </ul>
//     <a href="/" className="mobile-logo"> Moments <FontAwesomeIcon icon={faPaw} /> trace</a>
// </div>;

MobileDiv.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withTranslation("translations")(MobileDiv);