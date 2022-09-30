import React from "react";
import { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";

//Images
import imagenotfound from "../../../img/news/image-not-found.jpg";

//
import { useDispatch } from "react-redux";
import { setLoader } from "../../../redux/actions/actionCreator.js";

function Gallery(props) {
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();
  const updateNews = async () => {
    dispatch(setLoader(true));
    const url = process.env.REACT_APP_NEWS_URL
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    dispatch(setLoader(false));
  };

  useEffect(() => {
    updateNews();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2
        style={{
          // position: "absolute",
          position: "sticky",
          top: "70px",
          fontSize: "20px",
          color: "#117964",
          marginLeft: "20px",
          borderBottom: "5px solid #117964",
          display: "inline-block",
          marginBottom: "2px",
        }}
      >
        Random Post
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {articles.map((element) => {
          return (
            <div className="class" key={element.url}>
              <GalleryCard
                key={element.url}
                title={
                  element.title.length > 45
                    ? element.title?.slice(0, 45) + "..."
                    : element.title
                }
                description={element.description?.slice(0, 180) + "..."}
                imageUrl={
                  element.urlToImage ? element.urlToImage : imagenotfound
                }
                newsUrl={element.url}
                date={element.publishedAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
