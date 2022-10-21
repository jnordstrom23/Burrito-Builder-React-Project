import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import {Avatar, IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
                alt=""
                />
            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search Fakebook" type="text" />
            </div>
        </div>

        <div className='header__center'></div>
            <div className="header__options
            header__options--active">
                <HomeIcon fontsize ="large" />
            </div>
            <div className="header__options">
                <FlagIcon fontsize ="large" />
            </div>
            <div className="header__options">
                <SubscriptionsOutlinedIcon fontsize ="large" />
            </div>
            <div className="header__options">
                <StorefrontOutlinedIcon fontsize ="large" />
            </div>
            <div className="header__options">
                <SupervisedUserCircleIcon fontsize ="large" />
            </div>

        <div className= 'header__right'></div>
            <div className="header__info">
                <Avatar 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OWPGVnuBmE_iOMgSZsdPvTrRmVU-Qp5g3A&usqp=CAU"
                />
                <h4>Mark Z.</h4>
            </div>

            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>


    </div>
  )
}

export default Header