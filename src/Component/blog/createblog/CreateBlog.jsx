import React from "react";

import BlogForm from "./blogform/BlogForm";

//CSS
import "./createblog.css";
function CreateBlog() {
  return (
    <>
      <>
        <div>
          <div className="createblog-container container ">
            <BlogForm />
          </div>
        </div>
      </>
    </>
  );
}

export default CreateBlog;
