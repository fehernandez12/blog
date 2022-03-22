import React from "react";
import moment from "moment";
import 'moment/locale/es';
import { ScrollUtils } from "../utils/scrollUtils";

function BlogTitle(props: any) {
  const getDate = () => {
    console.log(props.date);
    moment.locale('es');
    return moment(props.date).format('[Publicado el] DD [de] MMMM [de] YYYY');
  }

  const scrollDown = (num: number) => {
    ScrollUtils.scrollTo(document.body, num, 1250);
}

  return (
    <React.Fragment>
      <div className="row h-100 d-flex align-items-center text-center">
        <div className="col">
            <h1>{props.title}</h1>
          <p className="lead">{getDate()}</p>
          <button className="btn btn-primary" onClick={() => scrollDown(window.innerHeight - 100)}>
              <i className="bi-caret-down"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export { BlogTitle };