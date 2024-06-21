import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  outline: "none",
};

const features=["Priortized Rankings in Conversations and Search",];

export default function SubscriptionModal({handleClose,open}) {
  const [plan, setPlan] = React.useState("Annually");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="flex items-center space-x-3">
              <IconButton onClick={handleClose} aria-label="delete">
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg">
                <h1 className="text-xl pr-5">
                  Get Verified to Unlock Premium Features
                </h1>
                <img
                  className="w-24 h-24"
                  src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between border rounded-full  px-5 py-3">
                <div>
                  <span
                    onClick={() => setPlan("Anually")}
                    className={`${
                      plan === "Anually" ? "text-black" : "text-gray"
                    }`}
                  >
                    Anually
                  </span>
                  <span className="text-green-500 text-sm ml-5"> SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("Monthly")}
                  className={`${
                    plan === "Monthly" ? "text-black" : "text-gray"
                  }`}
                >
                  Monthly
                </p>
              </div>

              <div className="space-y-3 ">
              {features.map((item) => (
  <div className="flex items-center space-x-5">
    <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
    <p className="text-xs">
      {item}
    </p>
  </div>
))}

              </div>

              <div className="cursor-pointer flex justify-center bg-gray-700 text-white rounded-full px-5 py-3">
                <span className="line-through italic"> ₹7,800.00/Year</span>

                <span className="px-5"> ₹6,800.00/Year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
