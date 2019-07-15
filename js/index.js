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
import Offer from './offer';
import Welcome from './home';

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
                <Route exact path='/offer' component={Offer} />
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
                <>
                    <div className="wrapper header flex1">
                        <div className="logo"><i className="fas fa-paw"></i></div>
                        <ul>
                            <li><NavLink exact to='/portfolio' className="decor">My portfolio</NavLink></li>
                            <li><NavLink exact to='/passions' className="decor">My passions</NavLink></li>
                            <li><NavLink exact to='/offer' className="decor">Offer</NavLink></li>
                            <li><NavLink exact to='/contact' className="decor">Contact</NavLink></li>
                        </ul>
                    </div>
                    <Route exact path='/' component={Welcome} />
                </>
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