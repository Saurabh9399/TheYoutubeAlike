import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__right" />
        <AppsIcon className="header__right" />
        <NotificationsIcon className="header__right" />
        <Avatar
          alt="Saurabh J"
          src="https://avatars1.githubusercontent.com/u/64205497?s=460&u=8a84d598d143bf91220f3afd56e111439c6b1573&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
