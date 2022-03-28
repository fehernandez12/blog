import React from "react";
import { ScrollUtils } from "../utils/scrollUtils";

function PageTitle(props: any) {
  const scrollDown = (num: number) => {
    ScrollUtils.scrollTo(document.body, num, 1250);
  }

  const capitalize = (string: string) => {
    let str = string.replace('-', ' ');
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      { props.title &&
        <div className = "row h-100 d-flex align-items-center text-center" >
          <h1>
            <span className="display-1">
              {`${props.kind}: ${capitalize(props.title)}`}
            </span>
            <br />
            <button className="btn btn-primary" onClick={() => scrollDown(1000)}>
              <i className="bi-caret-down"></i>
            </button> 
          </h1>
        </div>
      }
    </>
  );
}

export { PageTitle };