import React from 'react';

import './MenuItem.style.scss';

export const MenuItem = ({ title, imgUrl, size}) => {
  return (
    <div className={`${size} menu-item`}>
      <div className='background-img' style={{ backgroundImage:`url(${imgUrl})`}}> </div>
      <div className='content'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}
