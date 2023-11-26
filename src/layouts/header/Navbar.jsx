import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import LogoImg from "~/assets/logo.png";
import Container from "@mui/material/Container";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled
} from "@mui/material";
import { useState } from "react";
import { useAppStore } from "~/store/useAppStore";
import useAuthUser from "~/hooks/useAuthUser";
import UserMenu from "./UserMenu";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false
  });
  const { setModal } = useAppStore();
  const user = useAuthUser();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Products", "Services", "Blog", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(() => ({
    fontSize: "16px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#AFE0FA"
    }
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    maxWidth:"1500px!important",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2)
    }
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    height:"35px",
    width:"100%",
    objectFit:"cover",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }));

  return (
    <NavbarContainer maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={LogoImg} alt="logo" />
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2">Home</NavLink>
          <NavLink variant="body2">Products</NavLink>
          <NavLink variant="body2">Services</NavLink>
          <NavLink variant="body2">Blog</NavLink>
          <NavLink variant="body2">Contact</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
          // gap: "1rem"
        }}
      >
        {/* <NavLink variant="body2">Sign Up</NavLink> */}
        {user ? <UserMenu user={user} /> : <div onClick={() => setModal(true)}>
          <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
            buttonText="Login"
          />
        </div>}
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;