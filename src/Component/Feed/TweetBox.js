import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css'

const TweetBox = () => {
    return (
        <div className="tweetBox">
              <form>
                <div className="tweetBox-input">
                <Avatar src="https://robohash.org/0feae02ae510e29ddec6fb9f0e5c376b?set=set4&bgset=&size=400x400"/>
                <input type="text" value="" placeholder="What's going on" />

                </div>

                <div className="tweetBox-imgField">
                <input type="text"placeholder="Enter image url" />
                </div>
               
               
               
            <Button className="tweetBtn" >Tweet</Button>
            </form>
         
        </div>
    );
};

export default TweetBox;