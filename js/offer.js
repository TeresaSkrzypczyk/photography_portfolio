import React, {Component} from "react";
import ReactDOM from "react-dom";
import list from "./prices/prices";

class Prices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: [],
            availableProducts: props.list
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
            <div className="central row">
                <Products products={this.state.availableProducts} onBuy={e => this.handleBuyPick(e)}/>
                <Trash products={this.state.chosen} onBuy={e => this.handleBuyUnsubscribe(e)}/>
            </div>);
    }
}

function Products({products, onBuy}) {
    return (<div className="left_column col-xs-12 col-sm-6 col-md-6">
        <h3 className="text_h3">Select the moments you want to catch</h3>
        <ul>
            {products.map(product =>
                <li className="list" key={product.id}> Category: {product.name} <br /> Details: {product.detail}<br /> Price: {product.price}pln <button className="btn" onClick={e => onBuy(product)}>Select</button>
            </li>)}
        </ul>
    </div>);
}

function Trash({products, onBuy}) {
    const result = products.map(product => product.price);
    const sum = result.reduce((acc, val) => acc + val, 0);

    return (
        <div className="right_column col-xs-12 col-sm-6 col-md-6">
            {sum > 0 ? <h3 className="text_h3">You've chosen</h3> : <h3 className="text_h3">You haven't selected any option yet</h3>}
            <ul>
                {products.map(product =>
                    <li className="list" key={product.id}> Category: {product.name} <br /> Details: {product.detail}<br /> Price: {product.price}pln <button className="btn" onClick={e => onBuy(product)}>Delete</button>
                    </li>)}
            </ul>
            {sum > 0 ? <h3 className="text_h3">Total: {sum} pln</h3> : null}
        </div>);
}

function Information() {
    return (
            <>
                <h3 className="text_h3">Practical Information</h3>
                <ul className="practical_information">
                    <li>The photographic material will be ready within 20 working days after the photoshoot</li>
                    <li>Additional cost eg. admission tickets are on your side</li>
                    <li>The prices quoted are gross prices</li>
                </ul>
                <h3 className="text_h3">During the wedding day:</h3>
                <ul className="practical_information">
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