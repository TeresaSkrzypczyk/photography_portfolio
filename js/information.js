import React, {Component} from "react";
import PropTypes from "prop-types";
import {Trans, withTranslation} from "react-i18next";


class Information extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value: "en"
        };
    }

    render() {
        const { t, i18n } = this.props;

        return (
            <>
                <h3 className="text_h3"><Trans> {t("practical1")} </Trans></h3>
                <ul className="practical_information">
                    <li><Trans> {t("practical2")} </Trans></li>
                    <li><Trans> {t("practical3")} </Trans></li>
                    <li><Trans> {t("practical4")} </Trans></li>
                </ul>
                <h3 className="text_h3"><Trans> {t("practical5")} </Trans></h3>
                <ul className="practical_information">
                    <li><Trans> {t("practical6")} </Trans></li>
                    <li><Trans> {t("practical7")} </Trans></li>
                </ul>
            </>
        );
    }
}

Information.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withTranslation("translations")(Information);