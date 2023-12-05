import { Box, Container, styled, Typography } from "@mui/material";
import Logo from "~/components/logo/Logo";

import CustomButton from "~/layouts/header/CustomButton";

import { motion } from "framer-motion";
import Slide from "./Slide";

const text = "Hộp quà yêu thương ❤";
const text2 = "✨Hộp quà gửi tới bạn và tới những người bạn thương";
const text3 = "✨/shmily/ see how much I love you";

const Hero = () => {
  // framer
  const words = text.split(" ");
  const words2 = text2.split(" ");
  const words3 = text3.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.32, delayChildren: 0.04 * i
      }
    })
  };
  const container2 = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i
      }
    })
  };
  const container3 = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.04 * i
      }
    })
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  // framer
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(1),
    padding: "50px 0px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "50px" }}>
      <Container maxWidth="xl">
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 8,
                mb: 1
              }}
              component="div"
              display="inline-flex"
              alignItems="center"
              gap={1}
            >
            Chào mừng đến với cửa hàng <Logo />
            </Typography>

            <motion.div style={{ overflow: "hidden", display: "flex", fontSize: "3rem",
              fontWeight:"bold"
            }}
            variants={container}
            initial="hidden"
            animate="visible"
            >
              {words.map((word, index) => (
                <motion.span
                  variants={child}
                  style={{ marginRight: "10px" }}
                  key={word+index}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div style={{ overflow: "hidden", display: "flex", fontSize: "20px",
              color:"#5A6473", margin:"20px 0"
            }}
            variants={container2}
            initial="hidden"
            animate="visible"
            >
              {words2.map((word, index) => (
                <motion.span
                  variants={child}
                  style={{ marginRight: "5px" }}
                  key={index}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div style={{ overflow: "hidden", display: "flex", fontSize: "20px",
              color:"#5A6473", margin:"20px 0"
            }}
            variants={container3}
            initial="hidden"
            animate="visible"
            >
              {words3.map((word, index) => (
                <motion.span
                  variants={child}
                  style={{ marginRight: "5px" }}
                  key={index}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>


            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="👉 Mua ngay"
              heroBtn={true}
            />
          </Box>

          {/* slide */}

          <Slide />

        </CustomBox>
      </Container>

    </Box>
  );
};

export default Hero;