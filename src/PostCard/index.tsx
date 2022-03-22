import React from "react";
import { Link } from "react-router-dom";

function PostCard(props: any) {
    return (
        <div className="col-sm-8 offset-sm-2 offset-md-2 offset-lg-0 col-lg-6 col-xl-4">
            <div className="card shadow my-2">
                <div className="card-body">
                    <h5 className="card-title">{props.post.title}</h5>
                    <p className="card-text-muted">{props.post.summary}</p>
                    <Link to={`/articles/${props.post.slug}`} className="text-dark card-link stretched-link">Ver más...</Link>
                </div>
            </div>
        </div>
    );
}

export { PostCard };