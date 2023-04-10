import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const Root = () => {
    return(
        <Fragment>
            <MainNavigation />
            <main>
                <Outlet /> {/**marker where the child routes should be rendered to  */}
            </main>
        </Fragment>
    )
}

export default Root
