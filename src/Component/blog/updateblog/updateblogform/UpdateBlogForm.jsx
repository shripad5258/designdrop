import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

//CSS
import "../../createblog/blogform/blogform.css";
//IMGES
import Defaultpostimage from "../../../../img/blog-page/Defaultpostimage.jpg";

//Toastify

// import { toast } from 'react-toastify';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// schema
const schema = yup
  .object({
    title: yup
      .string()
      .test("len", "Title must be min 6 characters", (val) => val.length >= 6),

    description: yup
      .string()
      .test(
        "len",
        "Description must be 15 characters",
        (val) => val.length >= 15
      ),
  })
  .required();

export default function UpdateBlogForm() {
  const userState = useSelector((st) => st.user);
  let navigate = useNavigate();

  const { id } = useParams();

  const [file, setFile] = useState("");
  const [imageUrl, setImageurl] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${userState.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("category", data.tag);
        setImageurl(data.postImageUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const imageData = new FormData();
        imageData.append("name", file.name);
        imageData.append("file", file);

        fetch(`${process.env.REACT_APP_BACKEND_URL}/file/upload`, {
          method: "POST",
          body: imageData,
        })
          .then((response) => response.json())
          .then((data) => {
            setImageurl(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };
    getImage();
  }, [file]);


  const postPicture = imageUrl ? imageUrl : Defaultpostimage;

  const formSubmit = async (data) => {
    const { title, description, category } = data;

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${userState.token}`,
        },
        body: JSON.stringify({
          title,
          description,
          tag: category,
          picture: postPicture,
        }),
      });
      const json = await response.json();

      if (json.success) {
        toast.success("Blog Updated Successfully");
        navigate(`/details/${id}`);
      }
    } catch (error) {
      toast.error("Something went wrong! please try again later");
    }
  };

  return (
    <>
      <div className="">
        <div className="blogform-container">
          <img src={postPicture} alt="" />
          <div className="clearfix createblog">
            <label
              htmlFor="fileInput"
              className="uploadpicture-button btn-primary "
            >
              Upload Picture
            </label>
            <input
              id="fileInput"
              style={{ display: "none" }}
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="uploadpicture-button btn-primary "
            />
          </div>

          <div className="blogform">
            <div className="blogform-container container ">
              <form
                className="blogform-wrapper"
                onSubmit={handleSubmit(formSubmit)}
              >
                <input
                  type="text"
                  placeholder="Blog Title"
                  {...register("title", { required: true, min: 5 })}
                />

                <p>{errors.title?.message}</p>
                <textarea
                  placeholder="Type Here Blog"
                  {...register("description", { required: true, min: 3 })}
                />
                <p>{errors.description?.message}</p>

                <div className="flexselection">
                  <select {...register("category", { required: true })}>
                    <option value="Architecture">Architecture</option>
                    <option value="Residential ">Residential</option>
                    <option value="Commercial&Offices">
                      Commercial&Offices
                    </option>
                    <option value="Landscape">Landscape</option>
                    <option value="Art&Architecture"> Arts&Architecture</option>
                    <option value="Educational">
                      Educational Architecture
                    </option>
                    <option value="other">Other</option>
                  </select>

                  <div className="blogform-button  ">
                    <input
                      className="blogform-button btn-primary"
                      type="submit"
                      value="UPDATE BLOG"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
