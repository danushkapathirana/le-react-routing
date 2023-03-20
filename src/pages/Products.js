import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return(
        <Fragment>
            <h1>Products page</h1>
            <p>Go to the <Link to="/">home page</Link></p>
        </Fragment>
    )
}

export default Products
