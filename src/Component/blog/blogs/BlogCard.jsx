import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//TOAST
import { toast } from "react-toastify";

//CSS
import "./blogcard.css";

function BlogCard(props) {
  const userState = useSelector((st) => st.user);

  let {
    title,
    description,
    imageUrl,
    tag,
    date,
    author,
    id,
    createdBy,
    blog,
    setblog,
  } = props;


  const deletePost = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/delete/${id}`;

    try {
      let response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${userState.token}`,
        },
      });
      const json = await response.json();
      if (json.success) {
        // console.log("sucessfully");
        toast.success(JSON.stringify(json.msg));

        setblog(blog.filter((u) => u._id !== id));
      }
    } catch (error) {
      toast.error("Something went wrong! please try again later");
    }
  };


  return (
    <div>
      <article className="blog-card">
        <div className="blog-card-Header">
          <header>
            <img src={imageUrl} className="card-header" alt={title} />
          </header>
          <div className="blogtag">
            <div className="tag">
              <p>{tag}</p>
            </div>
          </div>
        </div>

        <div className="blog-card-Body">
          <div className="blog-card-body">
            <p className="date">{new Date(date).toDateString()}</p>
            <strong className="author">{author}</strong>
            <h2>{title}</h2>
            {/* <p className="blog-body-content description">{description}</p> */}
            <p className="blog-body-content description">{description}</p>

            <div className="butoonclass">
              <div className="font-awesome icons">
                <i className="fas fa-chevron-right fa-3x icon-font"></i>
                <Link to={`/details/${id}`}>
                  <p className="card-link">Explore More</p>
                </Link>

                {userState.user.id === createdBy && (
                  <>
                    <i
                      onClick={deletePost}
                      className="fa fa-trash fa-4x"
                      aria-hidden="true"
                    >delete</i>
                    <Link to={`/updateblog/${id}`}>
                      <i className="fas fa-edit fa-4x ">update</i>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogCard;
