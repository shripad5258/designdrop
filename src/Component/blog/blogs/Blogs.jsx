import React from "react";
import { useState, useEffect } from "react";
// import imagenotfound from "../../../img/news/image-not-found.jpg";

import { useDispatch } from "react-redux";
import { setLoader } from "../../../redux/actions/actionCreator.js";

//component
import BlogCard from "./BlogCard";

function Blogs() {
  const dispatch = useDispatch();

  const [blog, setblog] = useState([]);

  const updateNews = async () => {
    dispatch(setLoader(true));

    const url = `${process.env.REACT_APP_BACKEND_URL}/posts`;

    try {
      let data = await fetch(url);
      if (data) {
        let parsedData = await data.json();
        dispatch(setLoader(false));

        return parsedData;
      }
    } catch (error) {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    updateNews().then(setblog);
  }, []);

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {blog.map((element) => {
          return (
            <div key={element._id} className="class">
              <BlogCard
                blog={blog}
                setblog={setblog}
                id={element._id}
                createdBy={element.createdBy}
                title={
                  element.title.length > 45
                    ? element.title?.slice(0, 45) + "..."
                    : element.title
                }
                description={element.description?.slice(0, 150) + "..."}
                imageUrl={element.postImageUrl}
                date={element.createdAt.toLocaleString()}
                tag={element.tag}
                author={`${element.firstname}  ${element.lastname}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
