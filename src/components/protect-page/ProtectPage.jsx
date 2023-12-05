import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { useUserStore } from "~/store/useUserStore";

const ProtectPage = ({ children }) => {
  const { user } = useUserStore();

  useEffect(() => {
    if (!user) toast.success("Vui lòng đăng nhập để truy cập");
  }, [user]);

  return (
    user ? children : <Navigate to="/" />
  );

};


export default ProtectPage;