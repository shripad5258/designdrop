import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//IMAGES
import signuppage from "../../img/signup-page/signup-page.jpg";

//Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//CSS
import "./form.css";
//SCHEMA
const schema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
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
export default function Signup() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const userSignup = async (signup) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: signup.firstname,
        lastname: signup.lastname,
        email: signup.email,
        password: signup.password,
      }),
    });
    const redirectTolLog = () => {
      navigate("/login");
    };
    const json = await response.json();
    if (json.success) {
      toast.success(JSON.stringify(json.msg));
      const reDirect = setTimeout(redirectTolLog, 2000);
    } else if (!json.success) {
      toast.error(JSON.stringify(json.msg));
    } else {
      toast.error("Something went wrong! please try again later");
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="form">
        <div className="form-container container">
          <form className="form-wrapper" onSubmit={handleSubmit(userSignup)}>
            <h2>Create Your Account</h2>

            <input
              type="text"
              placeholder="FirstName"
              {...register("firstname", { required: true, min: 3 })}
            />
            <p>{errors.firstname?.message}</p>
            <input
              type="text"
              placeholder="LastName"
              {...register("lastname", { required: true, min: 3 })}
            />
            <p>{errors.lastname?.message}</p>

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
                Already have an account?
                <Link to="/login">
                  <strong className="form-navigate"> Login here </strong>
                </Link>
              </p>
            </div>
          </form>
          <div className="form-image">
            <img src={signuppage} alt="zaha-Hadid" />
            <div className="quote ">
              <div>
                <p>
                  “There are 360 degrees,
                  <br /> so why stick to one?” <br />
                  <strong> - Zaha Hadid</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
