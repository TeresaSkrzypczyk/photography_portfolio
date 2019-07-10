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
                <h1>Practical Information</h1>
                <ul>
                    <li>The photographic material will be ready within 20 working days after the photoshoot</li>
                    <li>Additional cost eg. admission tickets are on your side</li>
                    <li>The prices quoted are gross prices</li>
                </ul>
                <h2>During the wedding day:</h2>
                <ul>
                    <li>I can travel for the job in the Lower Silesia for no charge, for longer distances, the cost shall be determinated individually</li>
                    <li>If your wedding is more than 100km form Wrocław I require accommodation</li>
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