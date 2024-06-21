import React from "react";
import { Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import TweetCard from "../TweetCard/TweetCard";
function TweetDetails() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <React.Fragment>
      <section className="z-50 flex items-center sticky top-0 bg-capacity-95">

      <KeyboardBackspaceIcon
          onClick={handleBack}
          className="cursor-pointer"
        />
        <h1 className="py-5 text-xl font-bold opacity-90 "> 
        Tweet 
        </h1>

      </section>
      <section>
        <TweetCard/>
        <Divider sx={{mrgin:"2rem 0rem"}}/>
      </section>

      <section>
       { [1,1,1,1].map((item)=><TweetCard/>)}  
      </section>
    </React.Fragment>
  );
}

export default TweetDetails;
