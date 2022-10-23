import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => {
  
    const Click = (color)=> props.handleClick(color)
    return (
      <div className="colorOptions">
          
          {/* TODO */}
          <Color color="green" handleClick={Click}/>
          <Color color="blue" handleClick={Click}/>
          <Color color="red" handleClick={Click}/>
          <Color color="pink" handleClick={Click}/>

      </div>
    );
}

export default Menu;