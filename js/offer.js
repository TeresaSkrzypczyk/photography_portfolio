import React, {Component} from "react";
import ReactDOM from "react-dom";
import list from "./prices/prices";

class Prices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: [],
            availableProducts: props.list,
        };
    }

    handleBuyPick(product) {
        const availableProducts = [...this.state.availableProducts];
        const chosen = [...this.state.chosen, product];
        const stillAvailable = availableProducts.filter(x => x.id !== product.id);

        this.setState({chosen, availableProducts: stillAvailable})
    }

    handleBuyUnsubscribe (product) {
        const chosen = [...this.state.chosen];
        const availableProducts = [...this.state.availableProducts, product];
        const stillChosen = chosen.filter(y => y.id !== product.id);

        this.setState({availableProducts, chosen: stillChosen})
    }

    render() {
        return (
            <>
                <h2>If you want to catch a moment select your options</h2>
                <Products products={this.state.availableProducts} onBuy={e => this.handleBuyPick(e)}/>

                <h2>What you've chosen?</h2>
                <Trash products={this.state.chosen} onBuy={e => this.handleBuyUnsubscribe(e)}/>
            </>);
    }
}

function Products({products, onBuy}) {
    return (<>
        <ul>
            {products.map(product =>
                <li key={product.id}> {product.name} {product.detail} {product.price}pln <br />
                    <button onClick={e => onBuy(product)}>Pick</button>
            </li>)}
        </ul>
    </>);
}

function Trash({products, onBuy}) {
    return (
        <>
            <ul>
                {products.map(product =>
                    <li key={product.id} prices={product.price}>{product.name} {product.detail} {product.price}pln <br />
                        <button onClick={e => onBuy(product)}>Resignation</button>
                    </li>)}
            </ul>

            <ul>
                {products.map(product =>
                    <li key={product.id}>{product.price}pln <br />
                    </li>)}
            </ul>
        </>);
}

// function TotalPrice({totalPrice}) {
//     return (
//         <h2>{totalPrice.reduce((acc, val) => acc + val, 0)}</h2>
//     );
// }

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

function Offer() {
    return (
            <>
                <Prices list={list} />
                <Information />
            </>
    );
}

export default Offer;