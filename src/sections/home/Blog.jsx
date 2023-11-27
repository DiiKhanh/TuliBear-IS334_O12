import { Box, Container, styled, Typography } from "@mui/material";
import BlogCard from "./BlogCard";
import React from "react";

const Blog = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center"
    },
    backgroundColor:"transparent"
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Các bài viết
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Những lời chia sẻ về cửa hàng của chúng tôi.
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {
            Array(3).fill().map((i) => (
              <React.Fragment key={i}>
                <BlogCard />
              </React.Fragment>
            ))
          }
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Blog;