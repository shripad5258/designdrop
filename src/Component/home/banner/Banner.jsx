import React from "react";

import {Link} from 'react-router-dom'

import './banner.css'

function Banner() {
  return (
    <div>
      <section className="showcase-area" id="showcase">
        <div className="showcase-container container">
          <h1 className="main-title">
            Created for the next generation of Architects
          </h1>
          <p>
            …Focused on teaching young designers and architects how to
            successfully grow as creatives.
          </p>
          <Link to="/blog" className="btn btn-primary">
            Explore Here
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Banner;
