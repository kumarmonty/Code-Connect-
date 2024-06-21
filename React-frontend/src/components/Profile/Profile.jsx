import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TabComponent from "./TabComponent";
import ProfileModal from "./ProfileModal";

function Profile() {
  let verified = true;
  


  const handleFollowUser = () => {
    console.log("USER FOLLOWED");
  };

  const navigate = useNavigate();

  const[openProfileModal,setOpenProfileModal]= React.useState(false);

  const handleOpenProfileModal= () => setOpenProfileModal(true);

  const handleClose = () => setOpenProfileModal(false);
  
  const handleBack = () => navigate(-1);
  
  return (
    <div>
      <section className={"z-50 flex items-center top-0 bg-opacity-95"}>
        <KeyboardBackspaceIcon
          onClick={handleBack}
          className="cursor-pointer"
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          {" "}
          codeWithJosh{" "}
        </h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg"
          alt="COVER PHOTO "
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-betwen items-start mt-5 h-[5rem]">
          <Avatar
            alt="username"
            src="https://media.licdn.com/dms/image/D5635AQFKRuNmz5b4vg/profile-framedphoto-shrink_400_400/0/1705764415939?e=1708160400&v=beta&t=SANe4F5aK-ts_wTkipscYbb48rozqar39GPjmF-PSPE"
            className="transform -translate-y-24"
            sx={{ width: "8rem", height: "8rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              variant="outlined"
              onClick={handleOpenProfileModal}
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleFollowUser}
              sx={{ borderRadius: "20px" }}
            >
              {true ? "+Follow" : "Un-follow"}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg"> Code With Josh</h1>
            {verified && <VerifiedIcon style={{ color: "#1d9bf0" }} />}
          </div>
          <h1 className="text-gray-500">@codeWithoJosh</h1>
        </div>
        <div className="space-y-3">
          <p>
            Results-Driven Software Developer | Design & Development with React,
            Next.JS, Spring Boot | B.Tech (Computer Science) Student | Expected
            Graduation in 2025
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education </p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">India</p>
            </div>

            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined Sept 2023</p>
            </div>
          </div>
          <div className="flex items-center space-x-1 font-semibold ">
            {" "}
            <span> 291 </span>
            <span className="text-gray-500">Followers</span>
            &nbsp;
            <span> 506 </span>
            <span className="text-gray-500">Following</span>
          </div>
        </div>
      </section>
      <section>
        <TabComponent/>
      </section>
      <section>
      <ProfileModal open={openProfileModal} handleClose={handleClose} />

      </section>
    </div>
  );
}

export default Profile;
