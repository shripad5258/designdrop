import React from "react";
import ArticleCard from "./articlecard/ArticleCard";
// import "./articles.css";

//Static Data
import {
  articleImage1,
  articleHeading1,
  articleTitle1,
  articleDescription1,
  articleLink1,
  articleImage2,
  articleHeading2,
  articleTitle2,
  articleDescription2,
  articleLink2,
} from "../static/StaticData";

//IMAGES
function Articles() {
  return (
    <>
      <div className="container">
        <ArticleCard
          articleImage={articleImage1}
          articleHeading={articleHeading1}
          articleTitle={articleTitle1}
          articleDescription={articleDescription1}
          articleLink={articleLink1}
        />
        <ArticleCard
          articleImage={articleImage2}
          articleHeading={articleHeading2}
          articleTitle={articleTitle2}
          articleDescription={articleDescription2}
          articleLink={articleLink2}
        />
      </div>
    </>
  );
}

export default Articles;
