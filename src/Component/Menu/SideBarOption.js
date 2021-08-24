import React from 'react';
import './SideBarOption.css'

const sideBarOption = ({active, text, Icon }) => {
    return (
        <div className={`sideBarOption ${active && 'sideBarOption--active'}`}>
         <Icon />
         {text} 
        </div>
    );
};

export default sideBarOption;