import React, {Component} from "react";
import ReactDOM from "react-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            startDate: new Date(),
            text: "",
            errors: [],
            send: false
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
        if (this.state.name.length < 2) {
            errors.push('Input your name');
        }
        if (this.state.email.length < 3 && this.state.email.indexOf("@") === -1) {
            errors.push('E-mail is incorrect, please check again')
        }
        if (this.state.text === "") {
            errors.push('Please fill message field');
        }
        this.setState({errors});
        return errors.length === 0;
    }

    render() {
        const form = (
            <form onSubmit={e => this.handleSubmit(e)}>
                <div className="box">
                    <label><span>Name:</span><input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} /><br /></label>
                    <label><span>E-mail:</span><input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} /><br /></label>
                    <label><span>Date of the session:</span><DatePicker name="startDate" selected={this.state.startDate} onChange={e => this.handleChangeDate(e)} /></label>
                    <label><span>Message:</span><textarea type="text" name="text" value={this.state.text} onChange={e => this.handleChange(e)} /><br /></label>

                <button className="btn" type="submit">Send</button>
                </div>
            </form>
        );

        return (
            <div>
                <ul className="errors_information">{this.state.errors.map((error, index) => <li className="errors"  key={index}>{error}</li>)}</ul>
                {this.state.send ? <h3 className="text_h3">Thanks for your message</h3> : form}
            </div>);
    }
}

export default ContactForm;