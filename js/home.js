import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Trans, withTranslation} from "react-i18next";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import SimpleAppBar from './bar';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state= {
            text: "Hello! Welcome on my page!",
            value: "en"
        };
    }

    handleChange = event => {
        console.log("selected val is ", event.target.value);
        let newlang = event.target.value;
        this.setState(prevState => ({ value: newlang }));
        console.log("state value is", newlang);
        this.props.i18n.changeLanguage(newlang);
    };

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({
                text: "I'm really glad that you're here!"
            });
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timeoutId);
    }

    render() {
        const { t, i18n } = this.props;

        return (<>
            <div>
                <SimpleAppBar />

                <div>
                    <FormControl component="fieldset" >
                        <RadioGroup aria-label="Gender" name="gender1" value={this.state.value} onChange={this.handleChange}>
                            <FormControlLabel value="en" control={<Radio />} label="English" />
                            <FormControlLabel value="pl" control={<Radio />} label="Polish" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </div>

            <div>
                <h1 className="text_h1_home">{this.state.text}</h1>
                <br />
                <p className="text_p home"><Trans> {t("home1")} </Trans></p>
                <p className="text_p home"><Trans> {t("home2")} </Trans></p>
                <p className="text_p home"><Trans> {t("home3")} </Trans></p>
                <p className="text_p home"><Trans> {t("home4")} </Trans></p>
            </div>
            <div className="main_photo">
                <img className="color_photo" src="../img/mecolor.jpg" />
                <img className="monochromatic_photo" src="../img/me.jpg" />
            </div>
        </>)
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withTranslation("translations")(Welcome);

