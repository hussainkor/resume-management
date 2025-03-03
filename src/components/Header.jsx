import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ToggleButton } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import logo from "../assets/logo.png";

import { menuLinks } from "../static/staticData";
import { ThemeDarkContext } from "../context/themeContext";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { darkMode, handleDarkToggle } = useContext(ThemeDarkContext);

  const menuStyle = isActive ? "menu open" : "menu";
  return (
    <div className="navbar">
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div
        className={menuStyle}
        onClick={() => setIsActive((action) => !action)}
      >
        <ul>
          {menuLinks.map((item, i) => (
            <li key={i}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="hamburger"
        onClick={() => setIsActive((action) => !action)}
      >
        {isActive ? <IoClose /> : <IoMenu />}
      </div>
      <div className="toggle">
        <ToggleButton
          value={"check"}
          selected={darkMode}
          onChange={handleDarkToggle}
        >
          {darkMode ? <MdWbSunny /> : <FaMoon />}
        </ToggleButton>
      </div>
    </div>
  );
}
