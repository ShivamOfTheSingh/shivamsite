import React from 'react';

import './LightModeButton.css';

const LightModeButton = ({ toggleTheme }) => {
  return (
    <>
      <div className='ButtonMain'>
        <button className='lightmode-button' onClick={ toggleTheme }></button>
      </div>
    </>
  )
}

export default LightModeButton