import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";

function Sidebar() {
    return (
      <div className='sidebar'>
          <SidebarRow src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OWPGVnuBmE_iOMgSZsdPvTrRmVU-Qp5g3A&usqp=CAU' title= 'Mark Z.' />
  
          <SidebarRow Icon={EmojiFlagIcon} title='Pages'/>
          <SidebarRow Icon={PeopleIcon}title='Friends'/>
          <SidebarRow Icon={ChatIcon} title="Messenger"/>
          <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
          <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
          <SidebarRow Icon={ExpandMoreOutlined} title= "Marketplace"/>
      </div>
    )
  }
  
  export default Sidebar