import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyModal from "./ReplyModal";



const TweetCard = () => {

  const navigate = useNavigate();

  const[openReplyModal,setOpenReplyModal]= React.useState(false);

  const handleOpenReplyModal= () => setOpenReplyModal(true);

  const handleCloseReplyModal = () => setOpenReplyModal(false);

  const HandleTweetLike = () =>
  {
    console.log("TWEET LIKED")
  }
 
  const handleCreateRetweet = () =>
  {
    console.log("RETWEET CREATED")
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteTweet = () => {
    console.log("TWEET DELETED");
    handleClose();
  };
  const handleEditTweet = () => {
    console.log("TWEET EDITED");
    handleClose();
  };
  // const handleOpenReplyModal =() =>
  // { console.log("OPEN MODAL")}

  return (
    <React.Fragment>
      {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
        <RepeatIcon style={{ color: '#1d9bf0' }}/>

      </div> */}
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
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>

                <MenuItem onClick={handleEditTweet}>Edit</MenuItem>
              </Menu>
            </div>
           
          </div>
          <div className="mt-2">
                <div 
                onClick={()=>navigate("/tweet/${3}")}
                className="cursor-pointer"> 
                <p className="mb-2 p-0">
                "काल हर, दुख हर, दरिद्र हर, कष्ट हर, रोग हर, ॐ नमः पार्वतीपतये हर हर महादेव 🙏🙏
                </p>
                <img className="w-[28rem] border border-gray-400 p-5 rounded-md"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSk2Al3oL-VdeaPH2LqrgwWwEeg1wxSU1yAULbsURZRQ&s" alt="MAHADEV IMAGE" />
                </div>
                <div className="py-5 flex flex-wrap justify-between items-center">
                  <div className="space-x-3 items-center text-gray-600">
                  <ChatBubbleOutlineIcon className="cursor-pointer" onClick={handleOpenReplyModal}/>
                  <p>55</p>
                  </div>
                 
               

                  <div className={`${true?"text-pink-600":"text-gray-600"}`}>

                    {true?<FavoriteIcon
                    onClick={HandleTweetLike}
                    className="cursor-pointer"
                    />
                    :<FavoriteBorderIcon
                    onClick={HandleTweetLike}
                    className="cursor-pointer"
                    />}
                    <p>54</p>

                  </div>

                  <div className="space-x-3 items-center text-gray-600">
                  <BarChartIcon className="cursor-pointer" onClick={console.log("BAR CHART ICON")}/>
                  <p>550</p>
                  </div>

                  <div className="space-x-3 items-center text-gray-600">
                  <FileUploadIcon className="cursor-pointer" onClick={console.log("FILE UPLOAD ICON")}/>
                  </div>

                </div>
          </div>
        </div>
      </div>

      <section>
      <ReplyModal handleClose={handleCloseReplyModal} open={openReplyModal} />

      </section>
    </React.Fragment>
  );
};

export default TweetCard;
