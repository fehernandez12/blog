import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

function Layout(props: any) {
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}

export { Layout };