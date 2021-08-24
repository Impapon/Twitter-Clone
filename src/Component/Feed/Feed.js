
import React from 'react';
import TweetBox from './TweetBox'
import Post from './Post'
import './Feed.css'


const Feed = () => {
    return (
        <div className="feed">
            <div className="feedHeader">
            <h2>Home</h2>
            </div>
          <TweetBox/>
          <Post/>

        </div>
    );
};

export default Feed;