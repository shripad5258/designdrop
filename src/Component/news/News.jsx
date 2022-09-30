import React from "react";

//LOADER
import { useSelector } from "react-redux";

//CSS
import "./news.css";

//Component
import HighlightSlider from "./slider/HighlightSlider";
import Gallery from "./gallery/Gallery";
import Spinner from "../spinner/Spinner";

export default function News() {
  const loding = useSelector((st) => st.loading);

  return (
    <div className="news">
      <div className="news-container container">
        <h1>
          World <span>Architecture</span> News
        </h1>
      </div>
      <div className="slider-container">
        <h1>Highlights</h1>
        <div className="slider">
          <HighlightSlider />
        </div>
      </div>
      <div className="container news-items">
        <h1>
          “Architecture is the learned game, correct and magnificent, of forms
          assembled in the light” <i>- Le Corbusier</i>{" "}
        </h1>

        <div className="news-item">
          <div className="news-card">
            <Gallery />

            {loding.isLoading && <Spinner />}
          </div>
        </div>
      </div>
    </div>
  );
}
