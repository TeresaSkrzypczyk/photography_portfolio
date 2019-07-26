import React, {Component} from "react";
import {Trans, withTranslation} from "react-i18next";
import PropTypes from "prop-types";


class Products extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value: "en"
        };
    }

    render() {
        const {products, onBuy} = this.props;
        const { t, i18n } = this.props;

        return (
            <div className="left_column col-xs-12 col-sm-6 col-md-6">
                <h3 className="text_h3"><Trans> {t("product1")} </Trans></h3>
                <Trans i18nKey="products">
                    <ul i18nIsDynamicList>
                    {products.map(product =>
                        <li className="list" key={product.id}> Category: {product.name} <br /> Details: {product.detail}<br /> Price: {product.price}pln <button className="btn" onClick={e => onBuy(product)}>Select</button>
                        </li>)}
                </ul>
                </Trans>
            </div>
        );
    }

}

Products.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withTranslation("translations")(Products);
