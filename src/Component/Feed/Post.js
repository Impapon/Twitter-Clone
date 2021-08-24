import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons';
import React from 'react';
import './Post.css'

const Post = ({ displayName, userName, verified, text, image, avatar, }) => {
    return (

        <div className="post">
            <div className="header-class">
                <div className="post-avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="post-body">
                    <div className="post-header">
                        <h3>{displayName}
                            <span >
                                 {verified && <VerifiedUser className="varifiedIcon" />} <span className="userName">  @{userName} </span>
                            </span>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="post-text">
                <p>{text}</p>
            </div>


            <img src={image} alt="" />

            <div className="footer-icon">
                <ChatBubbleOutline fontSize="small" />
                <Repeat fontSize="small" />
                <FavoriteBorder fontSize="small" />
                <Publish fontsize="small" />
            </div>
        </div>

    );
};

export default Post;