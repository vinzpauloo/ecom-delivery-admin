import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import { handleModalStatus } from "../../features/modalSlice";
import approvedImg from "../../assets/approved.json";
import holdImg from "../../assets/hold.json";
import declinedImg from "../../assets/decline.json";

const data = {
  Approved: {
    logo: approvedImg,
    title: "APPROVED",
  },
  Hold: {
    logo: holdImg,
    title: "ON HOLD",
  },
  Declined: {
    logo: declinedImg,
    title: "DECLINED",
  },
};

const AlertModal = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();
  const { modalStatus } = useSelector((state) => state.modal);

  // Reset state values on modal close
  const handleClose = () => {
    window.location.reload();
    setOpen(false);
    dispatch(handleModalStatus(""));
  };

  // Detect modal status change
  useEffect(() => {
    if (modalStatus) {
      setOpen(true);
      setModalData(data[modalStatus]);
    }
  }, [modalStatus]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box
          sx={{
            bgcolor: "#151C26",
            border: "1px solid #343A40",
            borderRadius: "10px",
            width: 400,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 2,
            overflow: "hidden",
            outline: "none",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="300px"
            sx={{
              svg: {
                width: "250px !important",
              },
            }}
          >
            <Lottie animationData={modalData?.logo} loop={true} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="column"
            mt="40px"
          >
            <Typography
              variant="h3"
              color="#ffffff"
              fontWeight="600"
              letterSpacing="5px"
            >
              {modalData?.title}
            </Typography>
            <Button
              sx={{
                backgroundColor: "#D9D9D9",
                color: "#000000",
                fontWeight: "600",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#61481C",
                  color: "#ffffff",
                },
                width: "150px",
              }}
              onClick={handleClose}
            >
              Go back
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AlertModal;
