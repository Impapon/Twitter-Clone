import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home'
import SideBarOption from './SideBarOption'
import ExploreIcon from '@material-ui/icons/Search'
import Notifications from '@material-ui/icons/NotificationsNone'
import MessageIcon from '@material-ui/icons/MailOutline'
import BookMarkIcon from '@material-ui/icons/BookmarkBorder'
import ListIcon from '@material-ui/icons/ListAlt'
import ProfileIcon from '@material-ui/icons/PermIdentity'
import MoreIcon from '@material-ui/icons/MoreHoriz'
import {Button} from '@material-ui/core'
import './Menu.css'


const Menu = () => {
    return (
        <div className="sideBar">
           <TwitterIcon className="twitterIcon"/>
       <SideBarOption active Icon ={HomeIcon} text="Home"/>
       <SideBarOption Icon ={ExploreIcon} text="Explore"/>
       <SideBarOption Icon ={Notifications} text="Notification"/>
       <SideBarOption Icon ={MessageIcon} text="Message"/>
       <SideBarOption Icon ={BookMarkIcon} text="Bookmark"/>
       <SideBarOption Icon ={ListIcon} text="List"/>
       <SideBarOption Icon ={ProfileIcon} text="Profile"/>
       <SideBarOption Icon ={MoreIcon} text="More"/>
      <Button variant='outlined' fullWidth className="tweetBtn">Tweet</Button>
        </div>
    );
};

export default Menu;