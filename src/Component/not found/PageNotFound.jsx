import React from "react";

//CSS
import "./pagenotfound.css";

function PageNotFound() {
  return (
    <div className="container page-not-found">
      <div className="page-not-found-container">
        <div className="content">
          <h1>WE ARE SORRY, PAGE NOT FOUND</h1>
          <h2>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARY UNAVAILABLE
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
