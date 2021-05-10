import React from 'react';
import './CustomButton.style.scss';

const CustomButton = ({ children, customStyleClass, ...otherProps }) => {
  return (
    <button className={`${customStyleClass} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
