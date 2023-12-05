import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Login from "./header/Login";

import { Toaster } from "sonner";
import useAuthUser from "~/hooks/useAuthUser";
import { useUserStore } from "~/store/useUserStore";
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function DashboardLayout() {

  const user = useAuthUser();
  const { saveUser } = useUserStore();

  useEffect(() => {
    saveUser(user);
  }, [user, saveUser]);

  return (
    <React.Fragment>
      <Toaster position="top-right" expand closeButton visibleToasts={3}
        toastOptions={{
          duration:1000,
          style: {
            background: "green",
            color:"white"
          },
          className: "success"
        }}
      />
      <Login />
      {/* Header */}
      <Box display="flex" flexDirection="column" sx={{
        minHeight: "calc(100vh - 300px)",
        overflow:"hidden"
      }}>
        <Header />
        {/* Header */}
        {/* main */}
        <Box component="main" overflow="hidden" flexGrow={1}>
          <Outlet/>
        </Box>
      </Box>
      <Footer />
      {/* main */}

    </React.Fragment>
  );
}