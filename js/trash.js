import React, {Component} from "react";
import {Trans, withTranslation} from "react-i18next";
import PropTypes from "prop-types";


class Trash extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value: "en"
        };
    }

    render() {
        const {products, onBuy} = this.props;
        const { t, i18n } = this.props;
        const result = products.map(product => product.price);
        const sum = result.reduce((acc, val) => acc + val, 0);

        return (
            <div className="right_column col-xs-12 col-sm-6 col-md-6">
                {sum > 0 ? <h3 className="text_h3"><Trans> {t("product2")} </Trans></h3> : <h3 className="text_h3"><Trans> {t("product3")} </Trans></h3>}
                <ul>
                    {products.map(product =>
                        <li className="list" key={product.id}> Category: {product.name} <br /> Details: {product.detail}<br /> Price: {product.price}pln <button className="btn" onClick={e => onBuy(product)}>Delete</button>
                        </li>)}
                </ul>
                {sum > 0 ? <h3 className="text_h3"><Trans> {t("total")} </Trans> {sum} pln</h3> : null}
            </div>
        );
    }

}

Trash.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withTranslation("translations")(Trash);

