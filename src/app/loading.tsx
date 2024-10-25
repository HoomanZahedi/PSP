"use client";
import {
  Modal,
  Box,
} from "@mui/material";
// import "./loading.css";
import DotLoading from "@/components/dot-loading";

const Loading = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    bgcolor: "background.paper",
    flexDirection: "column",
    border: "0",
    borderRadius: "2rem",
    p: 4,
  };
  return (
    <Modal open={true}>
      <Box sx={style}>
          <img src={"/next.svg"} alt="image" width={150} height={100} />
        <DotLoading />
      </Box>
    </Modal>
  );
};

export default Loading;
