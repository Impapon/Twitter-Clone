import { Avatar } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
import React from 'react';

const Post = ({ displayName, userName, verified, text, image, avatar, }) => {
    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar src="https://robohash.org/0feae02ae510e29ddec6fb9f0e5c376b?set=set4&bgset=&size=400x400" />
            </div>
            <div className="post-header">
                <h3>Mahadi Hasan
                <span> <VerifiedUser />@Itsmahadi
                </span>
                    </h3>
                   
            </div>
            <div className="post-text">
                <p>Hey this is mahadi for you guys.dont hezitate to hire me.</p>
            </div>

            <img src="https://giphy.com/clips/studiosoriginals-halloween-OyYoUecFj8XTDeeDfJ" alt="" />

        </div>
    );
};

export default Post;