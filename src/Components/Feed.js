import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    var [posts, setPosts] = useState([]);
    /* Use the map() function to render multiple Blocks! */
    // TODO: edit this variable
    function addPost(color) {
        console.log("in addPost")
        console.log(posts)
        setPosts([color, ...posts])
    }
    return (
        <div>
            <Menu handleClick={addPost}></Menu>
            {/* Below is where all of your Blocks should render! */}
            {
                posts.map((x)=>(<Block color={x} />))
            }
        </div>
    );
}

export default Feed;