import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams()
    
    return(
        <Fragment>
            <h1>Product Details</h1>
            <p>{params.id}</p>
        </Fragment>
    )
}

export default ProductDetails
