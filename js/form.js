import React, {Component} from "react";
import ReactDOM from "react-dom";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            text: "",
            errors: [],
            send: false
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
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
            errors.push('Please give me your name');
        }
        if (this.state.email.length < 3 && this.state.email.indexOf("@") === -1) {
            errors.push('E-mail is incorrect, please check again')
        }
        if (this.state.text === "") {
            errors.push('Please write to me same message');
        }
        this.setState({errors});
        return errors.length === 0;
    }

    render() {
        const form = (
            <form onSubmit={e => this.handleSubmit(e)}>
                Name: <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} /><br />
                E-mail: <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} /><br />
                Message: <textarea type="text" name="text" value={this.state.text} onChange={e => this.handleChange(e)} /><br />
                <button type="submit">Send</button>
            </form>
        );

        return (
            <div>
                <ul>{this.state.errors.map((error, index) => <li key={index}>{error}</li>)}</ul>
                {this.state.send ? <h2 style={{color:"green"}}>Thanks for your message</h2> : form}
            </div>);
    }
}

class App extends Component {
    render() {
        return <ContactForm />
    }
}

ReactDOM.render(<App />, document.getElementById("app"));