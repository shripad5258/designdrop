import React from "react";

import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Logout() {
  let navigate = useNavigate();

  const userLogout = async () => {
    navigate("/blog");
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
   
    const json = await response.json();
    if (json.success) {
      navigate("/blog", { replace: true });
      toast.success(JSON.stringify(json.msg));
    } else if (!json.success) {
      toast.error(JSON.stringify(json.msg));
    } else {
      toast.error("Something went wrong! please try again later");
    }
  };

  return <div>
    {userLogout}
  </div>;
}

export default Logout;
