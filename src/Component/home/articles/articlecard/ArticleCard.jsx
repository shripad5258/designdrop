import React from "react";
import { Link } from "react-router-dom";
//CSS
import articlecard from "./articlecard.css";

function ArticleCard(props) {
  const { articleImage, articleHeading, articleTitle, articleDescription ,articleLink} =
    props;
  return (
    <div>
      <section id="article">
        <div className="article-wrapper container">
          <div className="article-img">
            <img src={articleImage} alt="article-us" />
          </div>
          <div className="article-text">
            <p className="small">{articleHeading}</p>
            <h2>{articleTitle}</h2>
            <p>{articleDescription}</p>
            <div className="articleNavigate ">
              <Link to={articleLink}>
                <p className="articleNavigate-text"><strong>Explore More....</strong></p>
                
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleCard;
