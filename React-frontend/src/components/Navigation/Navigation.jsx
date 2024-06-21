import React from "react";
import { MouseEvent } from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Button, Avatar ,Menu,MenuItem} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Navigation() {
  const [anchorEl,setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>
  {
    console.log("LOGOUT")
    handleClose();
  }
  const navigate = useNavigate();
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5" sx={{ textAlign: 'left' }}>
          <svg
            height="25"
            width="25"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-k200y r-18jsvk2 r-5sfk15 r-kzbkwu"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/{5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
        <Button
            variant="contained"
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

        <div className="flex item-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar
              alt="username"
              src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png"
            >
              {" "}
            </Avatar>
            <div>
              {" "}
              <span> username@email.com</span>
              <span className="opacity-70"> @codeWithUsername </span>
            </div>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
          
      >
        <MoreHorizIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
