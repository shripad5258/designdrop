import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Comment(props) {
  const commentimage = "https://static.thenounproject.com/png/12017-200.png";

  const userState = useSelector((st) => st.user);

  const deleteComment = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/comment/delete/${props.commentId}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "auth-token": `${userState.token}`,
      },
    });
    props.setToggle((prev) => !prev);
    toast.success("Successfully deleted");
  };

  return (
    <>
      <div>
        <div className="comment">
          <div className="comment-conatiner">
            <img
              className="comment-image"
              src={commentimage}
              alt="commentimage"
            />
            <p> {props.comment}</p>
          </div>
          <div className="username-date">
            <strong>{props.username}</strong>
            <p>{new Date(props.date).toDateString()}</p>
            {props.createdBy === userState.user.id && (
              <>
                <i
                  onClick={deleteComment}
                  className="fa fa-trash fa-2x "
                  aria-hidden="true"
                ></i>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
