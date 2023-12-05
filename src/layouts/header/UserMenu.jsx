import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ListItemButton, ListItemIcon, ListItemText, Menu, Typography, Tooltip,
  IconButton, Avatar
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "~/configs/firebase.config";
import { toast } from "sonner";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useUserStore } from "~/store/useUserStore";
import { useOrderStore } from "~/store/useOrderStore";

const menuConfigs = [
  {
    name:"Tài khoản",
    icon: <AccountCircleIcon />
  },
  {
    name: "Giỏ hàng",
    icon: <AddShoppingCartIcon />,
    path: "cart"
  },
  {
    name: "Lịch sử mua hàng",
    icon: <ShoppingBasketIcon />
  }
];

const UserMenu = ({ user }) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (e) => setAnchorEl(e.currentTarget);
  const { deleteUser } = useUserStore();
  const { removeOrder } = useOrderStore();

  const handlLogout = () => {
    signOut(auth).then(() => {
      deleteUser();
      removeOrder();
      toast.success("Đăng xuất thành công!");
    }).catch((error) => {
      toast.error(`Có lỗi xảy ra, ${error}`);
    });
  };


  return (
    <>
      <div onClick={toggleMenu}>
        <Tooltip title='Open settings'>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt={user.uid} src={user.photoURL}/>
            <Typography sx={{ marginLeft: "5px", fontSize:"16px", display:{ xs:"none", sm:"block" } }}>{user?.displayName}</Typography>
          </IconButton>
        </Tooltip>
      </div>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        slotProps={{ paper: { sx: { padding: 0 } } }}
      >
        {menuConfigs.map((item, index) => (
          <ListItemButton
            component={Link}
            to={item.path}
            key={index}
            onClick={() => setAnchorEl(null)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText disableTypography primary={
              <Typography textTransform='uppercase'>{item.name}</Typography>
            } />
          </ListItemButton>
        ))}
        <ListItemButton
          sx={{ borderRadius: "10px" }}
          onClick={handlLogout}
        >
          <ListItemIcon><LogoutOutlinedIcon /></ListItemIcon>
          <ListItemText disableTypography primary={
            <Typography textTransform='uppercase'>Đăng xuất</Typography>
          } />
        </ListItemButton>
      </Menu>
    </>


  );
};

export default UserMenu;