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
                <ul>
                    {products.map(product =>
                        <li className="list" key={product.id}> <Trans> {t("category")} </Trans> {product.name} <br /><Trans> {t("details")} </Trans> {product.detail}<br /><Trans> {t("price")} </Trans> {product.price}pln <button className="btn" onClick={e => onBuy(product)}><Trans> {t("select")} </Trans></button>
                        </li>)}
                </ul>
            </div>
        );
    }

}

Products.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withTranslation("translations")(Products);
