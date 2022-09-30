import React from "react";

// component
import BlogHeader from "./blogheader/BlogHeader";
import Blogs from "./blogs/Blogs";
import Spinner from "../spinner/Spinner";

import { useSelector } from "react-redux";


function Blog() {
  const loding = useSelector((st) => st.loading);
  return (
    <div className="blog">
      <div className="blog-container">
        <BlogHeader />
        <Blogs />
        {loding.isLoading && <Spinner />}
      </div>
    </div>
  );
}

export default Blog;
