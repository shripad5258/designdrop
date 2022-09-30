import React from "react";
import { useState, useEffect } from "react";
// Image
import userblogimg from "../../../img/blog-page/blog_image.jpg";

//Component
import BlogCard from "../blogs/BlogCard";
//CSS
import "./userblog.css";

//REDUX
import Spinner from "../../spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { setLoader } from "../../../redux/actions/actionCreator.js";

function UserBlog() {
  const userState = useSelector((st) => st.user);
  const loding = useSelector((st) => st.loading);
  const dispatch = useDispatch();

  const [blog, setblog] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchData = async () => {
    dispatch(setLoader(true));

    let isActive = true;
    const url = `${process.env.REACT_APP_BACKEND_URL}/user/posts/${userState.user.id}`;

    let data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${userState.token}`,
      },
    });
    dispatch(setLoader(false));

    try {
      if (data && isActive) {
        let parsedData = await data.json();
       
        setblog(parsedData);
        setRefreshKey((oldKey) => oldKey + 1);
      }
    } catch (error) {
      // console.log(error.message);
    }

    return function cleanup() {
      isActive = false;
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="userblog">
        <div className="userblog-image">
          <img src={userblogimg} alt="" />
        </div>
      </div>

      <div className="userblog-container">
        <div className="container">
          <div className="tagline">
            <h1>
              “Recognizing the need is the primary condition for design.”–
              Charles Eames
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {blog.length === 0 && (
              <>
                <h1>No BLog to Display</h1>
              </>
            )}
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
                    newsUrl="https://google.com"
                    date={element.createdAt.toLocaleString()}
                    tag={element.tag}
                    author={`${element.firstname}  ${element.lastname}`}
                  />
                </div>
              );
            })}
          </div>
          {loding.isLoading && <Spinner />}
        </div>
      </div>
    </>
  );
}

export default UserBlog;
