import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import Homesection from "../HomeSection/Homesection";
import RightPart from "../RightSide/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
// import Authentication from "../Authentication/Authentication";
import TweetDetails from "../TweetDetails/TweetDetails";
function YourComponent() {
  return (
    <Grid container className="px-5 lg:px-36 justify-between">
      <Grid item xs={12} lg={2.5} className="hidden lg:block w-full relative">
        <Navigation />
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        className="px-5 lg:px-9 hidden lg:block w-full relative"
      >
        <Routes>
          {/* <Route path="/" element={<Authentication />}></Route> */}
          <Route path="/home" element={<Homesection />}></Route>

          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/tweet/:id" element={<TweetDetails/>}> </Route>
        </Routes>
      </Grid>

      <Grid item xs={12} lg={3} className="hidden lg:block w-full relative">
        <RightPart />
      </Grid>
    </Grid>
  );
}

export default YourComponent;
