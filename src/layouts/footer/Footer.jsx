import { Box, Container, Stack } from "@mui/material";

import TopFooter from "./TopFooter";
// import BottomFooter from "./BottomFooter";

const Footer = () => {

  return (
    <Box sx={{ py: 5 }} bgcolor="#ffd1dc">
      <Container maxWidth="xl">
        <Stack>
          {/* top */}
          <TopFooter />

          {/* top */}
          {/* bottom */}
          {/* <BottomFooter /> */}
          {/* bottom */}
        </Stack>


      </Container>
    </Box>
  );
};

export default Footer;