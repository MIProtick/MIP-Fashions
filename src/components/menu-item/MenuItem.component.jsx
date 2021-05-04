import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.style.scss';

const MenuItem = ({ imgUrl, title, size, link, history, match }) => {
  return (
    <div className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${link}`)}>
          
      <div className='background-img' style={{ backgroundImage:`url(${imgUrl})`}}> </div>
      
      <div className='content'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
      
    </div>
  )
}

export default withRouter(MenuItem);
