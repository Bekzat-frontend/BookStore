import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <NavLink to="sign-up">Sign-up</NavLink>
        <NavLink to="sign-in">Sign-in</NavLink>
      </nav>
    </div>
  );
}

export default Header;
