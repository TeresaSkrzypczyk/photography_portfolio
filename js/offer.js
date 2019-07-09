import React, {Component} from "react";
import ReactDOM from "react-dom";
import list from "./prices/prices";

class Prices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartProducts: [],
            availableProducts: props.list,
        };
    }

    handleBuy(product) {
        const availableProducts = [...this.state.availableProducts];
        const cartProducts = [...this.state.cartProducts, product];
        const stillAvailable = availableProducts.filter(x => x.id !== product.id);

        this.setState({cartProducts, availableProducts: stillAvailable})
    }

    render() {
        return (<>
            <Products products={this.state.availableProducts} onBuy={e => this.handleBuy(e)}/>
            <Trash products={this.state.cartProducts} />
        </>);
    }
}

function Products({products, onBuy}) {
    return (<>
        <h2>If you want to catch a moment select your options</h2>
        <ul>
            {products.map(product => <li key={product.id}>
                {product.name} {product.detail} {product.price}zł
                <button onClick={e => onBuy(product)}>Kup</button>
            </li>)}
        </ul>
    </>);
}

function Trash({products}) {
    return (<>
        <h2>What you've chosen?</h2>
        <ul>
            {products.map(product => <li key={product.id}>{product.name} {product.price}zł</li>)}
        </ul>
    </>);
}

function Information() {
    return (
            <>
                <h1>Practical Informations</h1>
                <ul>
                    <li>It will be nice to call me by my name, but of course you can decide for yourself</li>
                    <li>The photographic material will be prepared within 20 working days after they have been taken</li>
                    <li>If it will be additions cost like admission tickets they're on our side</li>
                    <li>The prices quoted are gross prices</li>
                </ul>
                <h2>During the wedding day:</h2>
                <ul>
                    <li>I can go everywhere in the Lower Silesian for free, in other cases, the cost shall be determinated individual</li>
                    <li>If your wedding will be organized more than 100km form Wrocław I please to book me accommodation</li>
                </ul>
            </>
    );
}

function App() {
    return (
            <>
                <Prices list={list} />
                <Information />
            </>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"));