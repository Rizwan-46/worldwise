import React from "react";
import Styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={Styles.footer}>
        <p className={Styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by worldWise Inc.
        </p>
      </footer>
    </div>
  );
}
