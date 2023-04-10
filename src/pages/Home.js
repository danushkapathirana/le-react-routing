import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    // programmatically navigate; this is for only demo purpose
    // this mechanism can be used to navigate automatically some timer expires
    const navigateHandler = () => {
        navigate("/products")
    }

    return(
        <Fragment>
            <h1>Home page</h1>
            <p>Go to the <Link to="/products">list of products page</Link></p>
            <button onClick={navigateHandler}>Products</button>
        </Fragment>
    )
}

export default Home
