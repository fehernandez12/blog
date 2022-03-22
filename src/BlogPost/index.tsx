import React from "react";

function BlogPost(props:any) {
    return (
        <React.Fragment>
            <div className="row px-4">
                <div className="col-10 offset-1 col-xl-8 offset-xl-2">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}

export { BlogPost };