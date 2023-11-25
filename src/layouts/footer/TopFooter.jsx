import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import LogoImg from "~/assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";


const TikTokIcon = createSvgIcon(
  <svg fill="#000000" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path></g></svg>,
  "TikTok"
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffd1dc",
  ...theme.typography.body2,
  textAlign: "center",
  color: "white",
  boxShadow:"none",
  display:"flex",
  flexDirection:"column",
  justifyContent:"flex-start",
  alignItems:"start",
  gap:"5px"
}));

export default function TopFooter() {
  const FooterLink = styled("span")(() => ({
    fontSize: "16px",
    color: "#1A2027",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "white"
    }
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid xs={12} md={5} lg={4}>
          <img src={LogoImg} alt="logo img" loading="lazy"
            style={{
              height:"80px",
              width:"auto",
              objectFit:"cover"
            }}
          />
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Item>
              <Typography
                sx={{
                  fontSize: "20px",
                  color:"#5A6473",
                  fontWeight: "700"
                }}
              >
              Quick Links
              </Typography>
              <FooterLink>Listing</FooterLink>
              <FooterLink>Properties</FooterLink>
              <FooterLink>Agents</FooterLink>
              <FooterLink>Blog</FooterLink>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Typography
                sx={{
                  fontSize: "20px",
                  color:"#5A6473",
                  fontWeight: "700"
                }}
              >
              Quick Links
              </Typography>
              <FooterLink>Listing</FooterLink>
              <FooterLink>Properties</FooterLink>
              <FooterLink>Agents</FooterLink>
              <FooterLink>Blog</FooterLink>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Typography
                sx={{
                  fontSize: "20px",
                  color:"#5A6473",
                  fontWeight: "700"
                }}
              >
              Quick Links
              </Typography>
              <FooterLink>Listing</FooterLink>
              <FooterLink>Properties</FooterLink>
              <FooterLink>Agents</FooterLink>
              <FooterLink>Blog</FooterLink>
            </Item>
          </Grid>
          {/* social */}
          <Grid xs={6} lg={3}>
            <Item>
              <Typography
                sx={{
                  fontSize: "20px",
                  color:"#5A6473",
                  fontWeight: "700"
                }}
              >
              Social Media
              </Typography>
              <IconButton sx={{
                "&:hover":{
                  color:"white"
                }
              }}>
                <FacebookIcon fontSize="large"/>
                <Typography marginLeft="10px">Facebook</Typography>
              </IconButton>
              <IconButton sx={{
                "&:hover":{
                  color:"white"
                }
              }}>
                <InstagramIcon fontSize="large"/>
                <Typography marginLeft="10px">Instagram</Typography>
              </IconButton>
              <IconButton sx={{
                "&:hover":{
                  color:"white"
                }
              }}>
                <TikTokIcon fontSize="large"/>
                <Typography marginLeft="10px">TikTok</Typography>
              </IconButton>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item><Typography color="black" paddingX={5}>
            © Copyright - TuliBear - Đồ án môn Thương Mại Điện Tử - IS334.O12
            </Typography></Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}