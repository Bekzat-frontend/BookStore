import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
