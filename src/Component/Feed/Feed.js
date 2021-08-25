
import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox'
import Post from './Post'
import './Feed.css'
import db from '../FirebaseConfig/Firebase'

const Feed = () => {

    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
       
      db.collection("posts").onSnapshot((snapshot) =>
          
        setPosts(snapshot.docs.map((doc) => doc.data()))
        )
    },[])

    return (
        <div className="feed">
            <div className="feedHeader">
                <h2>Home</h2>
            </div>
            <TweetBox />
            {
                posts.map(post => (
                    <Post
                        displayName={post.displayName}
                        userName={post.userName}
                        verified={post.verified}
                        text={post.text}
                        image={post.image}
                        avatar={post.avatar}
                    />
                )
                )}

        </div>
    );
};

export default Feed;