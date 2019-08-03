import React, {Component} from "react";
import Gallery from "react-grid-gallery";
import { wedding, wedding_outdoor, baptism, family, pregnancy } from "./photos/work";
import Translation from './translation';
import {Trans, withTranslation} from "react-i18next";
import PropTypes from "prop-types";

class Work extends Component {
    render () {
        const style = { display: "block",
            minHeight: "1px",
            maxWidth: "100%",
            overflow: "auto",
            marginLeft: "auto",
            marginRight: "auto"};

        const { t, i18n } = this.props;

        return (
            <>
                <Translation />

                <h1 className="text_h1"><Trans> {t("menu2")} </Trans></h1>

                <div style={style}>
                    <h3><Trans> {t("title1")} </Trans></h3>
                    <Gallery
                        images={wedding}
                        enableLightbox={true}
                        margin = {4}
                        backdropClosesModal
                    />
                </div><br />
                <div style={style}>
                    <h3><Trans> {t("title2")} </Trans></h3>
                    <Gallery
                        images={wedding_outdoor}
                        enableLightbox={true}
                        margin = {4}
                        backdropClosesModal
                    />
                </div><br />
                <div style={style}>
                    <h3><Trans> {t("title3")} </Trans></h3>
                    <Gallery
                        images={pregnancy}
                        enableLightbox={true}
                        margin = {4}
                        backdropClosesModal
                    />
                </div><br />
                <div style={style}>
                    <h3><Trans> {t("title4")} </Trans></h3>
                    <Gallery
                        images={baptism}
                        enableLightbox={true}
                        margin = {4}
                        backdropClosesModal
                    />
                </div><br />
                <div style={style}>
                    <h3><Trans> {t("title5")} </Trans></h3>
                    <Gallery
                        images={family}
                        enableLightbox={true}
                        margin = {4}
                        backdropClosesModal
                    />
                </div>
            </>
        );
    }

}

Work.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withTranslation("translations")(Work);





