import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright, faHeart, faMugHot, faPaw} from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faInstagram, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import React, {Component} from "react";

import {Trans, withTranslation} from "react-i18next";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

class FooterDiv extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value: "en"
        };
    }

    render() {
        const { t, i18n } = this.props;

        return (
            <div className="footer">
                <div>
                    <p className="footer_text"><Trans> {t("footer1")} </Trans> <FontAwesomeIcon icon={faMugHot} /> <Trans> {t("footer2")} </Trans> <FontAwesomeIcon icon={faHeart} /></p>
                </div>
                <div>
                    <a href="https://www.instagram.com/te.skrzypczyk/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon_media"/></a>
                    <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} className="icon_media"/></a>
                    <a href="https://www.facebook.com/tereska.skrzypczyk" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} className="icon_media"/></a>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faCopyright} /> Teresa Ziółkowska 2019 </p>
                </div>
            </div>
        );
    }
}

FooterDiv.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withTranslation("translations")(FooterDiv);


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
//
//     export default footerDiv;