import React from "react";

import { useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// Component
import Comments from "./comment/Comments";

//CSS
import "./blogdetail.css";

//TOAST
import { toast } from "react-toastify";

function BlogDetail() {
  const userState = useSelector((st) => st.user);

  const [blog, setblog] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  const deletePost = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/delete/${id}`;
  

    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${userState.token}`,
      },
    });
    const json = await response.json();
    if (json.success) {
      toast.success(JSON.stringify(json.msg));
      navigate("/blog");

      setblog(blog.filter((u) => u._id !== id));
    }
  };

  const updateBlog = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/post/${id}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setblog(parsedData);
  };

  useEffect(() => {
    updateBlog();
  }, []);

  return (
    <>
      <div className="blogdetail container">
        <div className="blogform-container">
          <div className="blogcontent">
            <img src={blog.postImageUrl} alt="" />
            <div className="deleteblog-icons">
              {userState.user.id === blog.createdBy && (
                <>
                  <i
                    onClick={deletePost}
                    className="fa fa-trash fa-4x deleteblog-icon"
                    aria-hidden="true"
                  ></i>
                  <Link to={`/updateblog/${id}`}>
                    <i className="fas fa-edit fa-4x deleteblog-icon"></i>
                  </Link>
                </>
              )}
            </div>
            <div className="tag">
              <h2>
                Author -{blog.firstname} {blog.lastname}{" "}
              </h2>
              <h2>Tag -{blog.tag} </h2>
            </div>
            <div className="heading">
              <h1>{blog.title}</h1>
            </div>
            <div className="description">
              <p>{blog.description}</p>
            </div>
          </div>
        </div>
        <Comments postid={id} />
      </div>
    </>
  );
}

export default BlogDetail;
