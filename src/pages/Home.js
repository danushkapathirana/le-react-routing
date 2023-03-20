import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <Fragment>
            <h1>Home page</h1>
            <p>Go to the <Link to="/products">list of products page</Link></p>
        </Fragment>
    )
}

export default Home
