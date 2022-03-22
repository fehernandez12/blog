import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer(props:any) {
    return (
            <footer className="mt-auto d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2022, FH</p>
                <a href="#!" className=" display-5 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                    👾
                </a>
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a href="https://fehernandez.com/" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted">
                            <i className="bi-house"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://fehernandez.com/" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted">
                            <i className="bi-linkedin"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://fehernandez.com/" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted">
                            <i className="bi-github"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://fehernandez.com/" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted">
                            <i className="bi-instagram"></i>
                        </a>
                    </li>
                </ul>
            </footer>
    );
}

export { Footer };