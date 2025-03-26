import React from "react";
import { Route, Routes } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";
function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="sign-up" element={<Login />} />
          <Route path="sign-in" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
