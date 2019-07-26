import React, {Component} from "react";
import ReactDOM from "react-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import {Trans, withTranslation} from "react-i18next";
import PropTypes from "prop-types";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            startDate: new Date(),
            text: "",
            errors: [],
            send: false,
            value: "en"
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleChangeDate(date) {
        this.setState({
            startDate: date
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {
            this.setState({send: true})
        }
    }

    validate() {
        const errors = [];
        const { t, i18n } = this.props;

        const one = <p><Trans> {t("error1")} </Trans></p>;
        const two = <p><Trans> {t("error2")} </Trans></p>;
        const three = <p><Trans> {t("error3")} </Trans></p>;

        if (this.state.name.length < 2) {
            errors.push(one);
        }
        if (this.state.email.length < 3 && this.state.email.indexOf("@") === -1) {
            errors.push(two)
        }
        if (this.state.text === "") {
            errors.push(three);
        }
        this.setState({errors});
        return errors.length === 0;
    }

    render() {
        const { t, i18n } = this.props;

        const form = (
            <form onSubmit={e => this.handleSubmit(e)} method="POST">
                <div className="box">
                    <label><span><Trans> {t("form1")} </Trans></span><input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} /><br /></label>
                    <label><span><Trans> {t("form2")} </Trans></span><input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} /><br /></label>
                    <label><span><Trans> {t("form3")} </Trans></span><DatePicker className="datepicker" name="startDate" selected={this.state.startDate} onChange={e => this.handleChangeDate(e)} /></label>
                    <label><span><Trans> {t("form4")} </Trans></span><textarea type="text" name="text" value={this.state.text} onChange={e => this.handleChange(e)} /><br /></label>

                <button className="btn" type="submit"><Trans> {t("form5")} </Trans></button>
                </div>
            </form>
        );

        return (
            <>
                <h1 className="text_h1"><Trans> {t("form7")} </Trans></h1>
                <div className="general">
                    <ul className="errors_information">{this.state.errors.map((error, index) => <li className="errors"  key={index}>{error}</li>)}</ul>
                    {this.state.send ? <h3 className="text_h3"><Trans> {t("form6")} </Trans></h3> : form}
                </div>
            </>);
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withTranslation("translations")(ContactForm);