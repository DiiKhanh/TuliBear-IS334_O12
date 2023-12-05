import { Box } from "@mui/material";

const HeroContainer = () => {
  return (
    <Box sx={{
      position: "relative",
      color: "primary.contrastText",
      "&::before": {
        content: "\"\"",
        width: "100%",
        height: "30%",
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 2,
        pointerEvents: "none"
      }
    }}>
      <img src="https://i.ibb.co/rfZz1zt/tmdt-avt.png" width="100%" height="300px" style={
        {
          objectFit:"cover"
        }
      }/>
    </Box>
  );
};

export default HeroContainer;