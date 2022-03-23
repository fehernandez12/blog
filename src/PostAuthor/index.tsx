import React from "react";
import { Link } from "react-router-dom";
import { isTaggedTemplateExpression } from "typescript";

function PostAuthor(props: any) {
    const image = require('../assets/images/image-fh.png');
    return (
        <React.Fragment>
            <hr />
            <div className="row my-5">
                <div className="col col-md-6 col-lg-4 col-xl-3 text-end">
                    <img src={String(image)} className="rounded-circle" alt="" width="50" />
                </div>
                <div className="col col-md-6 col-lg-8 col-xl-9 d-flex align-items-center">
                    <div className="col">
                        <p className="text-muted m-0">Autor</p>
                        <p className="m-0">Felipe Hernández</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row my-5">
                {(props.tags && props.categories) && (<div className="col">
                    <p>
                        <strong>Tags: </strong> {props.tags.map(
                            (tag: any) => (
                                <Link to={`/tags/${tag.slug}`} key={tag.slug}>
                                    <span className="badge bg-info me-1 text-dark" key={tag.id}>{tag.title}</span>
                                </Link>
                            )
                        )}
                    </p>
                    <p>
                        <strong>Categorías: </strong> {props.categories.map(
                            (category: any) => (
                                <Link to={`/categories/${category.slug}`} key={category.slug}>
                                    <span className="badge bg-secondary me-1 bg-opacity-50 text-dark"  key={category.id}>{category.title}</span>
                                </Link>
                            )
                        )}
                    </p>
                </div>)}
            </div>
        </React.Fragment>
    );
}

export { PostAuthor };