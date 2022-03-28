import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop(props) {
    const { pathname } = useLocation();
    useEffect(
      () => {
            window.scrollTo({top: 0, behavior: 'instant'});
      }, [pathname]
    );
    return null;
}

export { ScrollTop };
