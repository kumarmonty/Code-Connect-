import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import ImageIcon from '@mui/icons-material/InsertPhoto';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { Button } from "@mui/material";
import TweetCard from "../TweetCard/TweetCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("TWEET TEXT IS REQUIRED"),
});


const HomeSection = () => {
const[uploadingImage, setUploadingImage]= useState(false);
const[selectedImage,setSelectedImage]= useState("");
const handleSelectImage = (event)=>
{
    setUploadingImage(true);
    const imgUrl= event.target.files[0];
    formik.setFieldValue("image" , imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
}

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90"> Home</h1>
      </section>
      <section className={"pb-10"}>
        <div>
          <Avatar
            alt="username"
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png"
          >
            {" "}
          </Avatar>
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="WHAT'S ON YOUR MIND"
                  className={"border-none outline-none text-xl bg-transparent"}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content} </span>
                )}
              </div>
              {/* <div>
                <img src="" alt="" />
              </div> */}

              <div className='flex justify-between items-center mt-5'>
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2  rounded-md cursor-pointer">
                  <ImageIcon  style={{ color: '#1d9bf0' }}/>
                <input type="file" name="image-file" className="hidden" onChange={handleSelectImage} />

                  </label>
                  <FmdGoodIcon style={{ color: '#1d9bf0' }} />

                  <CodeOffIcon style={{ color: '#1d9bf0' }} />

                  <TagFacesIcon style={{ color: '#1d9bf0' }} />


                </div>
                <div>
                <Button
            variant="contained"
            type="submit"
            sx={{
              width: "75%",
              height: "40px",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
          >
            {" "}
            post{" "}
          </Button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
  {[1, 1, 1, 1, 1].map((item, index) => (
    <TweetCard key={index} />
  ))}
</section>
    </div>
  );
};

export default HomeSection;
