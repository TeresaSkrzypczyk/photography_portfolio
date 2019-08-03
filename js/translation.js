import React, {Component} from "react";
import {Trans, withTranslation} from "react-i18next";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import PropTypes from "prop-types";

class Translation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "en"
        };
    }

    handleChange = event => {
        console.log("selected val is ", event.target.value);
        let newlang = event.target.value;
        this.setState(prevState => ({value: newlang}));
        console.log("state value is", newlang);
        this.props.i18n.changeLanguage(newlang);
    };

    render() {
        const {t, i18n} = this.props;

        return (
            <div className="app-bar">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="Gender" name="gender1" value={this.state.value}
                                onChange={this.handleChange}>
                        <FormControlLabel value="en" control={<Radio/>} label="English"/>
                        <FormControlLabel value="pl" control={<Radio/>} label="Polish"/>
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

Translation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withTranslation("translations")(Translation);