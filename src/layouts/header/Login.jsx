import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Logo from "~/components/logo/Logo";
import Button from "@mui/material/Button";
import { useAppStore } from "~/store/useAppStore";
import { createSvgIcon } from "@mui/material/utils";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "~/configs/firebase.config";
import { toast } from "sonner";
import useAuthUser from "~/hooks/useAuthUser";
import { useUserStore } from "~/store/useUserStore";
import { useEffect } from "react";

const GoogleIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
  </svg>,
  "Google"
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #333",
  boxShadow: 24,
  p: 2,
  borderRadius: "10px"
};

export default function Login() {
  const { isShowModal, setModal } = useAppStore();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  // const user = useAuthUser();
  // const { saveUser } = useUserStore();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Đăng nhập thành công!");
      // saveUser
    } catch (error) {
      toast.error(`Có lỗi khi đăng nhập ${error}`);
    } finally {
      setModal(false);
    }
  };

  // useEffect(() => {
  //   saveUser(user);

  // }, [user, saveUser]);

  return (
    <div>
      <Modal
        open={isShowModal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box sx={{ marginBottom: "2rem", display:"flex",
              alignItems:"center", justifyContent:"center", gap:1
            }}>
              <Typography fontWeight='700' fontSize='1.75rem'>
                <span style={{ color: "#0F1B4C" }}>Welcome to</span>
              </Typography> <Logo />
            </Box>
            {/* google */}

            <Box marginBottom={2}>
              <Button variant="outlined" startIcon={<GoogleIcon />}
                sx={{
                  padding:"15px 30px",
                  borderRadius:"20px",
                  color:"black",
                  border:"1px solid #333"
                }}
                onClick={handleLogin}
              >
            Login with Google
              </Button>
            </Box>

            {/* policy */}
            <Box p={4}>
              <Typography fontSize="0.75rem">
            By continuing, you agree to TuliBear Terms of Service; Opens a new tab and acknowledge you&apos;ve read our Privacy Policy; Opens a new tab. Notice at collection; Opens a new tab.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}