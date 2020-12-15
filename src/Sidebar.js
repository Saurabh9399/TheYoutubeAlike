import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";


function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <SidebarRow Icon={WhatshotIcon} title="Library" />
      <SidebarRow Icon={WhatshotIcon} title="History" />
      <SidebarRow Icon={WhatshotIcon} title="Your Videos" />
      <SidebarRow Icon={WhatshotIcon} title="Watch Later" />
      <SidebarRow Icon={WhatshotIcon} title="Liked Videos" />
    </div>
  );
}

export default Sidebar;
