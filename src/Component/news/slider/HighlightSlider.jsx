import React from "react";
import SliderCard from "./SliderCard";
import { useState, useEffect } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";

//Images
import imagenotfound from "../../../img/news/image-not-found.jpg";

//swiper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import {
  setLoader,
} from "../../../redux/actions/actionCreator.js";

// import  "swiper";
import "swiper/css";
import Spinner from "../../spinner/Spinner";

function HighlightSlider(props) {
  const [articles, setArticles] = useState([]);
  const loding = useSelector((st) => st.loading);
  const dispatch = useDispatch();
  const updateNews = async () => {
    dispatch(setLoader(true));
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API}`;
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
    <div className="swiper-container">
      {loding.isLoading && <Spinner />}
      <Swiper
        modules={[Navigation]}
        freeMode={true}
        grabCursor={true}
        navigation={{ clickable: true }}
        className="mySwiper swiper-wrapper"
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {articles.map((element, index) => {
          return (
            <div key={index}>
              <SwiperSlide key={index}>
                <SliderCard
                  title={
                    element.title.length > 40
                      ? element.title?.slice(0, 60) + "..."
                      : element.title
                  }
                  description={element.description?.slice(0, 180) + "..."}
                  imageUrl={
                    element.urlToImage ? element.urlToImage : imagenotfound
                  }
                  newsUrl={element.url}
                  date={element.publishedAt}
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}

export default HighlightSlider;
