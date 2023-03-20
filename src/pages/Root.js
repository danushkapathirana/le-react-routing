import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

import classes from './Root.module.css'

const Root = () => {
    return(
        <Fragment>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet /> {/**marker where the child routes should be rendered to  */}
            </main>
        </Fragment>
    )
}

export default Root
