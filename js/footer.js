import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright, faHeart, faMugHot} from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React, {Component} from "react";
import {Trans, withTranslation} from "react-i18next";

class FooterDiv extends Component {
    render() {
        const { t, i18n } = this.props;

        return (
            <div className="footer">
                <div>
                    <p><Trans> {t("footer1")} </Trans> <FontAwesomeIcon icon={faMugHot} /> <Trans> {t("footer2")} </Trans> <FontAwesomeIcon icon={faHeart} className="heart"/></p>
                </div>
                <div>
                    <a href="https://www.instagram.com/te.skrzypczyk/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon_media"/></a>
                    <a href="https://www.linkedin.com/in/teresa-magdalena-ziolkowska/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon_media"/></a>
                    <a href="https://www.facebook.com/tereska.skrzypczyk" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} className="icon_media"/></a>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faCopyright} /> Teresa Ziółkowska 2019 </p>
                </div>
            </div>
        );
    }
}

export default withTranslation("translations")(FooterDiv);
