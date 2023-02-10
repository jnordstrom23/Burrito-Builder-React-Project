import React from 'react';
import "./HeaderMobile.css";
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
import { useStateValue } from './StateProvider';
import ChatIcon from '@mui/icons-material/Chat';


function HeaderMobile() {
    const [{user}, dispatch] = useStateValue();
  return (
    <div className='header'>
        <div className='header__left'>
            <img
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                width="185"
                alt=""
                />
           
        </div>

        

        <div className= 'header__right'></div>
        <div className="header__input">
                <AddIcon />
            </div>
            <div className="header__input">
                <SearchIcon />
            </div>
            <div className="header__input">
                <img
                    src="https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-facebook-messenger-1.png"
                    height="25"
                
            />
            </div>


    </div>
  )
}

export default HeaderMobile