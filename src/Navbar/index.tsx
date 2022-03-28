import React from "react";
import { Link } from "react-router-dom";

function Navbar(props:any) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-primary">
                <div className="container-fluid">
                    <a href="https://fehernandez.com/" target="_blank" rel="noopener noreferrer" className="navbar-brand ms-2">
                        👋
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                            {/* <li className="nav-item">
                                <a href="#!" className="nav-link">Archivo</a>
                            </li> */}
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">Inicio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export { Navbar };