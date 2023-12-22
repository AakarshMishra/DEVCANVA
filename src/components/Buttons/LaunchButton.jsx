import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
      Contact Us!  
      <ConnectWithoutContactIcon style={{paddingLeft:"7px"}}/>
    </Button>
  );
};

export default LaunchButton;
