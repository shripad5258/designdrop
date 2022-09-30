import React from "react";

import { Link } from "react-router-dom";

//REDUX
import { useSelector } from "react-redux";
//CSS
import "./blog.css";

function BlogHeader() {
 const userState = useSelector((st) => st.user);
 

  return (
    <div>
      <div className="blog-header">
        <div className="image"></div>
        <div className="blog-heading">
          <h1>
            Ideas, Tips, and Simple Ways to
            <br /> Make Life Even Easier
          </h1>

          <Link to="/news" className="blog-button btn-primary">
            Explore Here
          </Link>
        </div>
      </div>
      <div className="container clearfix createblog ">
        {userState.isLoggedIn ? (
          <>
          <Link to="/createblog" className="createblog-button btn-primary ">
            Create Blog
          </Link>
          <Link to="/user/posts" className="createblog-button btn-primary">
            Your Blogs
          </Link>
          
          </>
          
        ) : (
          <>
           <Link to="/login" className="createblog-button btn-primary">
            Login to Create Blog
          </Link>
          </>
         
        )}
      </div>
    </div>
  );
}

export default BlogHeader;
