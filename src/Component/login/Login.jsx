import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userAuthActions } from "../../redux/actions/actionCreator";

//Toastify

import "react-toastify/dist/ReactToastify.css";

//IMAGES
import loginpage from "../../img/login-page/FrankLloydWright.jpg";

//SCHEMA
const schema = yup
  .object({
    email: yup.string().required(),
    password: yup
      .string()
      .test(
        "len",
        "Password must be min 6 characters",
        (val) => val.length >= 6
      ),
  })
  .required();

export default function Login(props) {
  //REDUX
  const [submissionErrors, setSubmissionErrors] = useState({});
  const dispatch = useDispatch();
  // const userState = useSelector((st) => st.user);

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const userLogin = async (event) => {
    try {
      dispatch(userAuthActions.login({ user: event }));
      navigate("/blog");
    } catch (error) {
      // console.log("Error logging in user...", error.response ?? error);
      if (error.response && error.response.data) {
        setSubmissionErrors(error.response.data);
      } else setSubmissionErrors({ err: "Login error" });
    }
  };

  return (
    <div>

      <div className="form">
        <div className="form-container container">
          <form className="form-wrapper" onSubmit={handleSubmit(userLogin)}>
            <h2>Welcome Back</h2>

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <p>{errors.email?.message}</p>

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true, min: 5 })}
            />
            <p>{errors.password?.message}</p>

            <div className="form-button ">
              <input
                className="blogform-button btn-primary"
                type="submit"
                value="Lets Started"
              />
            </div>

            <div className="form-bottom">
              <p>
                Don't have an account?
                <Link to="/signup">
                  <strong className="form-navigate"> Signup here </strong>
                </Link>
              </p>
            </div>
          </form>
          <div className="form-image">
            <img src={loginpage} alt="Louis_Sullivan.jpg" />
            <div className="quote ">
              <div>
                <p>
                  “An idea is salvation by imagination.”
                  <br />
                  <strong> - Frank Lloyd Wright</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
