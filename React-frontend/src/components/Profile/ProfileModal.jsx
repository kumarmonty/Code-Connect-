import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField"; // Import TextField
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 4,
  boxShadow: 24, // Corrected
  p: 4,
  outline: "none",
};

const ProfileModal = ({ open, handleClose }) => {
  // const [open, setOpen] = React.useState(false);
  const [uploadingProfile, setUploadingProfile] = React.useState(false);
  const [uploadingBackground, setUploadingBackground] = React.useState(false);

 
  const handleSubmit = (values) => {
    console.log("PROFILE MODAL SUBMITTED", values);
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      bio: "",
      profilePicture: "",
      backgroundImage: "",
      location: "",
    },
    onSubmit: handleSubmit,
  });

  const handleBackGroundChange = async (event) => {
    setUploadingBackground(true);
    const { name } = event.target;
    const file = event.target.files[0];

    await formik.setFieldValue(name, file);

    setUploadingBackground(false);
  };

  const handleProfileChange = async (event) => {
    try {
      setUploadingProfile(true);
      console.log("PROFILE PICTURE CHANGED");
      const { name } = event.target;
      const file = event.target.files[0];
      await formik.setFieldValue(name, file); // Update formik values
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    } finally {
      setUploadingProfile(false);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose} aria-label="delete">
                  <CloseIcon />
                  &nbsp;
                  <p className="text-sm"> Edit Profile </p>
                </IconButton>
              </div>
              <Button type="submit"> Save </Button>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden h-[80vh] ">
              <React.Fragment>
                <div className="w-full">
                  <div className="relative">
                    <img
                      className="w-full h-[12rem] object-cover object-center"
                      src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg"
                      alt="Background Image"
                    />
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleBackGroundChange}
                      name="backgroundImage"
                    />
                  </div>
                </div>
              </React.Fragment>
              <div className="w-full transform -translate-y-20 ml-4 h-[6rem]">
                <div className="relative">
                  <img
                    style={{
                      width: "8rem",
                      height: "8rem",
                      borderRadius: "50%",
                      border: "3px solid white",
                    }}
                    alt="profile"
                    src="https://media.licdn.com/dms/image/D5635AQFKRuNmz5b4vg/profile-framedphoto-shrink_400_400/0/1705764415939?e=1708833600&v=beta&t=Xn0O5HkQicfhqOlEAYNNu2ksPXyNU2VYnPuXdhxEJ5c"
                  />
                  <input
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    name="profilePicture"
                    onChange={handleProfileChange}
                    type="file"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullName &&
                    Boolean(formik.errors.fullName)
                  }
                  helperText={
                    formik.touched.fullName &&
                    formik.errors.fullName
                  }
                />
                <TextField
                  fullWidth
                  id="userName"
                  name="userName"
                  label="User Name"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.userName &&
                    Boolean(formik.errors.userName)
                  }
                  helperText={
                    formik.touched.userName &&
                    formik.errors.userName
                  }
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={
                    formik.touched.bio && formik.errors.bio
                  }
                />
                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.location &&
                    Boolean(formik.errors.location)
                  }
                  helperText={
                    formik.touched.location &&
                    formik.errors.location
                  }
                />
                <div className="my-3">
                  <p className="text-lg"> Birth Date, Edit</p>
                  <p className="text-2xl">October 26, 1999</p>
                </div>
                <p className="py-3 text-lg"> EDIT PROFESSIONAL PROFILE </p>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileModal;
