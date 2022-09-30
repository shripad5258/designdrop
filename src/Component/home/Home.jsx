import React from "react";

//Components
import Banner from "./banner/Banner";
import About from "./about/About";
import Archistyle from "./archistyles/Archistyle";
import Articles from "./articles/Articles";
import {
  AboutHeading,
  AboutTitle,
  AboutDescription,
  ArticleHeading,
  ArticleTitle,
  ArticleDescription,
  AboutImage,
  ArticleImage,
} from "./static/StaticData";

function Home() {
  return (
    <div>
      <Banner />
      <About
        heading={AboutHeading}
        title={AboutTitle}
        description={AboutDescription}
        image={AboutImage}
      />
      <Archistyle />
      <About
        heading={ArticleHeading}
        title={ArticleTitle}
        description={ArticleDescription}
        image={ArticleImage}
      />
      <Articles />
    </div>
  );
}

export default Home;
