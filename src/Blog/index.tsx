import React from "react";

function Blog(props: any) {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

export { Blog };