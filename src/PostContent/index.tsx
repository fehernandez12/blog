import React from "react";

function PostContent(props: any) {
    return (
        <React.Fragment>
            <div className="mb-5">
                <h4>{props.summary}</h4>
                <hr />
                <p>{props.content}</p>
            </div>
        </React.Fragment>
    );
}

export { PostContent };

