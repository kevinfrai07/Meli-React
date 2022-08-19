import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../shared/Breadcrumb";
import Home from "./Home";
import { getSearchProduct } from "../services/productsServices";
import ListProducts from "../shared/ListProducts"

function Items() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(null);
    const { search } = useParams();
    useEffect(() => {
        const getProducts = async () => {
            const data = await getSearchProduct(search);
            const results = data.results;
            const filters = data.filters;
            setCategories(filters);
            if (results.length > 0) {
                setProducts(results);
            } else {
                setProducts([]);
            }
        };
        getProducts();
    }, [search]);

   

    return (
        <Fragment>
            <Home />
            <div className="container categorias">
                <Breadcrumb categories={categories} />
                <div className="card mb-3" >
                    <span >
                        {
                            Array.isArray(products) && products.map(product => (
                                <ListProducts key={product.id} product={product}/>
                            )
                        )}
                    </span>
                </div>
            </div>
        </Fragment>

    )
}
export default Items;