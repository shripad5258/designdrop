import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
// Component 
import Comment from "./Comment";

//CSS
import "./comment.css";

//TOAST
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Comments(props) {
  const commentimage = "https://static.thenounproject.com/png/12017-200.png";
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const [allcomment, setAllcomment] = useState([]);
  const userState = useSelector((st) => st.user);
  const { postid } = props;

  const [toggle, setToggle] = useState(false);
  const [showComment, setshowComment] = useState({
    userName: "",
    postId: "",
    createdAt: new Date(),
    usercomment: "",
  });

  const fetchData = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/comments/${postid}`;

    const response = await fetch(url);
    const fetchallcomments = await response.json();
    setAllcomment(fetchallcomments);
    // console.log(fetchallcomments);
    setshowComment({ usercomment: fetchallcomments.comment });
  };

  useEffect(() => {
    fetchData();
    return () => {
      // console.log("This will be logged on unmount");
    };
  }, [postid, toggle]);

  const postComment = async () => {
    if (comment.length > 9) {
      const url = `${process.env.REACT_APP_BACKEND_URL}/comment/new`;

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          comment: comment,
          postId: props.postid,
          createdBy: userState.user.id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "auth-token": `${userState.token}`,
        },
      });
      const fetchdata = await response.json();
      if (fetchdata.username) {
        toast.success(JSON.stringify(fetchdata.msg));
        setComment("");
        setToggle((prev) => !prev);
      }
    }else{
      toast.error("Comment Must be 10 characters")
    }
  };

  const onchange = (e) => {
    setComment(e.target.value);
  };

  const redirectLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="blogdetail-comment">
        <h2>What's On Your Mind?</h2>
        <div className="comment-container">
          <img
            className="comment-image"
            src={commentimage}
            alt="commentimage"
          />
          <textarea
            onChange={onchange}
            placeholder="Type here your Comment"
            value={comment}
            required
          ></textarea>
          {userState.isLoggedIn ? (
            <>
              <button
                onClick={postComment}
                className="btn btn-primary comment-button "
              >
                submit
              </button>
            </>
          ) : (
            <button
              onClick={redirectLogin}
              className="btn btn-primary comment-button "
            >
              Login to comment
            </button>
          )}
        </div>
      </div>

      {allcomment &&
        allcomment.length > 0 &&
        allcomment.map((comment) => (
          <Comment
            key={comment._id}
            username={comment.username}
            comment={comment.comment}
            date={comment.createdAt}
            createdBy={comment.createdBy}
            commentId={comment._id}
            setToggle={setToggle}
          />
        ))}
    </div>
  );
}

export default Comments;
