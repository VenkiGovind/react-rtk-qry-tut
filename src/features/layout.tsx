import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/header";

export const Layout = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <Outlet />
    </React.Fragment>

  )
};