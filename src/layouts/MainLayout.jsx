import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Login from "./header/Login";

import { Toaster } from "sonner";
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function DashboardLayout() {

  return (
    <React.Fragment>
      <Toaster position="top-right" expand closeButton visibleToasts={3}
        toastOptions={{
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