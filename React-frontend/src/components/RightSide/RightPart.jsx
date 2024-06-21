import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Button } from "@mui/material";
import { defaultLocale } from "yup";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscriptionModal from "../SubscriptionModal/SubscriptionModal";
function RightPart() {
  const [openSubscriptionModal, setOpenSubscriptionModal] = React.useState(false);
    const handleOpenSubscriptionModal = () => setOpenSubscriptionModal(true);
    const handleCloseSubscriptionModal = () => setOpenSubscriptionModal(false);
  const handleChangeTheme = () => {
    console.log("THEME CHANGED");
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <Brightness7Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>

      <section className="my-5">
        <h1 className="text-xl font-bold"> GET VERIFIED </h1>
        <h1 className="font-bold my-2"> subscribe to unlock new feature</h1>
        <Button
  onClick={handleOpenSubscriptionModal}
  variant="contained"
  sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
>
  {" "}
  Get Verified{" "}
</Button>

      </section>
      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1"> What's Happening </h1>
        <div>
          <p className="mt-5"> New York Fashion Week Fall 2024
New York Fashion Week
·
LIVE</p>
          <p className="mt-5">Trending in India
#AbhishekGhosalkar
4,330 posts</p>
          <p className="mt-5">Only on X · Trending
#WorldBookFair2024
1,734 posts</p>
<p className="mt-5"> Trending in India
#AbhishekGhosalkar className="mt-5"
4,335 posts</p>
        </div>
        <MoreHorizIcon style={{ color: '#1d9bf0' }}/>
      </section>
      <section>
      <SubscriptionModal open={openSubscriptionModal} handleClose={handleCloseSubscriptionModal}/>
      </section>
    </div>
  );
}
export default RightPart;
