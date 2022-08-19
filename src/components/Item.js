import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProductByID, getProductDescriptionByID, getCategoryByID } from "../services/productsServices";

import Home from "./Home";
import Breadcrumb from "../shared/Breadcrumb";
import { numberFormat } from "../helpers/currency";
import ImgCarousel from "../shared/ImgCarousel";


function Item() {
    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState(null);
    const [DescProduct, setDescProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const result = await getProductByID(id);
            const filters = await getCategoryByID(result.category_id);
            const descResult = await getProductDescriptionByID(id);
            setCategories(filters);
            setProduct(result);
            setDescProduct(descResult)
        };
        getProduct();
    }, [id]);

    return (
        <Fragment>
            <Home />
            <div className="container categorias">
                <Breadcrumb categories={categories} />
                <div className="card">
                    <div className="row">
                        <div className="col-8">
                            <ImgCarousel imgs={product.pictures} />
                            <div className="card-body description">
                                <h5 className="card-title text4">Descripción del Producto</h5>
                                <p className="card-text text5">{DescProduct.plain_text}</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <h5 className="card-title text1" translate="product.condition">{product.condition === 'used' ? 'Usado' : 'Nuevo'} - {product.sold_quantity} Vendidos</h5>
                            <p className="card-text text2">{product.title}</p>
                            <h5 className="card-title text3">  {product.currency_id === undefined ? numberFormat(product.price, 'USD') : numberFormat(product.price, product.currency_id)}</h5>
                            <div className="d-grid gap-2 div-btn">
                                <button className="btn btn-lg btn-shop text-white">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Item;