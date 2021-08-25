import { Avatar } from '@material-ui/core';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import React, { useState } from 'react';
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const Post = ({ displayName, userName, verified, text, image, avatar, }) => {

    const [love, setLove] = useState(0)
    const handleLove = () => {
        setLove(love + 1)
    }
    return (

        <div className="post" >
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />} @
                                {userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon />
                    <RepeatIcon />
                    <div>
                        <FavoriteBorderIcon
                            onClick={handleLove}
                        /> <span style={{fontSize:'27px',color:'red'}}>{love} </span> 
                    </div>
                    <PublishIcon />
                </div>
            </div>
        </div>

    );
};

export default Post;