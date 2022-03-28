import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title, avatar, onClick }) {
  return (
    <div onClick={onClick} className="header_option">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
