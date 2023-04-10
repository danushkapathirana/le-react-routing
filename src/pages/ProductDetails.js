import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams()
    
    return(
        <Fragment>
            <h1>Product Details</h1>
            <p>{params.id}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </Fragment>
    )
}

export default ProductDetails

// <p><Link to=".." relative="path">Back</Link></p>

// relative="path" -> 

// "products/:id" is not a sibling path of "/products" path (product is not the parent path)
// parent path is "/"
// therefore, if you don't put relative="path" prop, it will going back up to its parent path (in this case "/"; means going back to home page)
// if you put relative="path", it will going back up to only one level (in this case "/products"; means going back to product page) 
