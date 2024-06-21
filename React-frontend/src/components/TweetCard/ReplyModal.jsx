import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import ImageIcon from "@mui/icons-material/InsertPhoto";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export default function ReplyModal({ handleClose, open }){
  // const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [selectedImage, setSelectedImage] = React.useState("");
  const [uploadingImage, setUploadingImage] = React.useState(false);

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  const handleSubmit = (values) => {
    console.log("HANDLE SUBMIT ", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: 4,
    },
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5">
            <Avatar
              onClick={() => navigate("/profile/${6")}
              className="cursor-pointer"
              alt="username"
              src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png"
            />

            <div className="full-w">
              <div className="flex justify-between items-center">
                <div className="flex cursor-pointer items-center space-x-2">
                  <span className="font-semibold"> Code With Josh </span>
                  <span className="text-gray-600">@codeWithJosh</span>
                  <VerifiedIcon style={{ color: "#1d9bf0" }} />
                </div>
              </div>
              <div className="mt-2">
                <div
                  onClick={() => navigate("/tweet/${3}")}
                  className="cursor-pointer"
                >
                  <p className="mb-2 p-0">
                    "काल हर, दुख हर, दरिद्र हर, कष्ट हर, रोग हर, ॐ नमः
                    पार्वतीपतये हर हर महादेव 🙏🙏
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className={"py-10"}>
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
                      className={
                        "border-none outline-none text-xl bg-transparent"
                      }
                      {...formik.getFieldProps("content")}
                    />
                    {formik.errors.content && formik.touched.content && (
                      <span className="text-red-500">
                        {formik.errors.content}{" "}
                      </span>
                    )}
                  </div>
                  {/* <div>
                <img src="" alt="" />
              </div> */}

                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flex items-center space-x-2  rounded-md cursor-pointer">
                        <ImageIcon style={{ color: "#1d9bf0" }} />
                        <input
                          type="file"
                          name="image-file"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon style={{ color: "#1d9bf0" }} />

                      <CodeOffIcon style={{ color: "#1d9bf0" }} />

                      <TagFacesIcon style={{ color: "#1d9bf0" }} />
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
        </Box>
      </Modal>
    </div>
  );
}
