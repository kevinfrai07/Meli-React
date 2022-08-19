import React, {Fragment} from "react";
import { Link } from 'react-router-dom';

import { numberFormat } from "../helpers/currency";
import free from "../assets/ic_shipping.png"

function ListProducts({ product }) {
    
    return (
        <Fragment>
            <div className="row g-0">
                <div className="col-sm-2" >
                    <Link to={`/item/${product.id}`} className="text-decoration-none link">
                        <img src={product.thumbnail} className="productitems" alt={product.thumbnail} />
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <Link to={`/item/${product.id}`} className="text-decoration-none link">
                            <h5 className="card-title text1items">{product.currency_id === undefined ? numberFormat(product.price, 'USD') : numberFormat(product.price, product.currency_id)} {product.shipping.free_shipping ? <img src={free} alt=""/> : ''} </h5>
                            <p className="card-text text2items">{product.title}</p>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card-body">
                        <h5 className="card-title text-muted text3items">{product.address.state_name}</h5>
                        <h5 className="card-title text-muted text3items">{product.condition = "new" ? "Nuevo" : "Usado"}</h5>
                    </div>
                </div>
            </div>
            <hr width="95%" className="mx-auto" />
        </Fragment>
    )
}
export default ListProducts;
