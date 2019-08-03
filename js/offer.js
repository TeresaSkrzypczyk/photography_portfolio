import React, {Component} from "react";
import list from "./prices/prices";
import Information from "./information";
import Products from "./products";
import Trash from "./trash";
import Translation from './translation';
import {Trans} from "react-i18next";

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
        return (<div className="central row">
                    <Products products={this.state.availableProducts} onBuy={e => this.handleBuyPick(e)}/>
                    <Trash products={this.state.chosen} onBuy={e => this.handleBuyUnsubscribe(e)}/>
        </div>);
    }
}

function Offer() {
    return (
            <>
                <Translation />

                <h1 className="text_h1"><Trans i18nKey="menu4"> </Trans></h1>

                <Prices list={list} />
                <Information />
            </>
    );
}

export default Offer;