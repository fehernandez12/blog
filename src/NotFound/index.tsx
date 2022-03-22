import React from "react";
import { Link } from "react-router-dom";

function NotFound(props: any) {
    return (
        <React.Fragment>
            <div className="row h-100 d-flex align-items-center text-center">
                <div className="col">
                    <h1 className="display-1">😔</h1>
                    No hay nada que ver aquí. <br />
                    <Link to={'/'} className='text-dark'>Volver al inicio.</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export { NotFound };