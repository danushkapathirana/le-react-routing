import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
    {id: 1, title: "Product 1"},
    {id: 2, title: "Product 2"},
    {id: 3, title: "Product 3"}
]

const Products = () => {
    return(
        <Fragment>
            <h1>Products page</h1>
            <p>Go to the <Link to="/">home page</Link></p>

            <br />
            <ul>
                {
                    PRODUCTS.map((prod) => (
                        <li key={prod.id}> <Link to={`/products/${prod.id}`}> {prod.title} </Link> </li>
                    ))
                }
            </ul>
        </Fragment>
    )
}

export default Products
