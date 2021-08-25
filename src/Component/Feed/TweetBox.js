import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css'
import db from '../FirebaseConfig/Firebase'

const TweetBox = () => {
    const [tweetMessage,setTweetMessage] = useState("")
    const [tweetImage,setTweetImage] = useState("")

    const handleTweetBtn =(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            displayName:"Barak Ubama",
            userName:"itsBaraq",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://media.giphy.com/media/YWLGIVanrsSbKY6z49/giphy.gif" 
        
        }  ) 
      
        setTweetMessage("")
        setTweetImage("")

    }

    return (
        <div className="tweetBox">
              <form>
                <div className="tweetBox-input">
                <Avatar src="https://robohash.org/0feae02ae510e29ddec6fb9f0e5c376b?set=set4&bgset=&size=400x400"/>
                
                <input type="text"
               onChange={e=>setTweetMessage(e.target.value)}
                 value={tweetMessage} 
                 placeholder="What's going on" />

                </div>

                <div className="tweetBox-imgField">

                <input type="text"
                onChange={e=>setTweetImage(e.target.value)}
                value={tweetImage}
                placeholder="Enter image url" />
                </div>
               
                          
            <Button onClick={handleTweetBtn} type ="submit" className="tweetBtn" >Tweet</Button>
            </form>
         
        </div>
    );
};

export default TweetBox;