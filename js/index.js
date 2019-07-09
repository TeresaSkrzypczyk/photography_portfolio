import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import ContactForm from './form';

class Portfolio extends Component {
    render() {
        return (
            <>
                <NavLink exact to="/">Home</NavLink><br />
                <NavLink exact to="/passions">My passions</NavLink><br />
                <NavLink exact to="/offer">Offer</NavLink><br />
                <NavLink exact to="/contact">Contact</NavLink>
                <h1>My portfolio</h1>
            </>
        );
    }
}

class Passions extends Component {
    render() {
        return (
            <>
                <NavLink exact to="/">Home</NavLink><br />
                <NavLink exact to="/portfolio">My portfolio</NavLink><br />
                <NavLink exact to="/offer">Offer</NavLink><br />
                <NavLink exact to="/contact">Contact</NavLink>
                <h1>My passions</h1>
            </>
        );
    }
}

class PriceList extends Component {
    render() {
        return (
            <>
                <NavLink exact to="/">Home</NavLink><br />
                <NavLink exact to="/portfolio">My portfolio</NavLink><br />
                <NavLink exact to="/passions">My passions</NavLink><br />
                <NavLink exact to="/contact">Contact</NavLink>
                <h1>Offer</h1>
            </>
        );
    }
}

class Contact extends Component {
    render() {
        return (
            <>
                <NavLink exact to="/">Home</NavLink><br />
                <NavLink exact to="/portfolio">My portfolio</NavLink><br />
                <NavLink exact to="/passions">My passions</NavLink><br />
                <NavLink exact to="/offer">Offer</NavLink>
                <h1>Send me a message</h1>
                <Route exact path='/contact' component={ContactForm} />
            </>
        );
    }
}

class Main extends Component{
    render() {
        return (
            <div>
                <h1>Hello in this beautiful day!</h1>
                <ul>
                    <li><NavLink exact to='/portfolio'>My portfolio</NavLink></li>
                    <li><NavLink exact to='/passions'>My passions</NavLink></li>
                    <li><NavLink exact to='/offer'>Offer</NavLink></li>
                    <li><NavLink exact to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return <HashRouter>
            <>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/portfolio' component={Portfolio} />
                    <Route exact path='/passions' component={Passions} />
                    <Route exact path='/offer' component={PriceList} />
                    <Route exact path='/contact' component={Contact} />
                    <Route path='*' component={Main}/>
                </Switch>
            </>
        </HashRouter>;
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));