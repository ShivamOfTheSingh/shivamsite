import React from 'react'
import ProfileCell from './ProfileCell'
import "./Profiles.css"

const Profiles = () => {
  return (
    <div className='ProfileMain'>
      <ProfileCell />
      <ProfileCell />
      <ProfileCell />
    </div>
  )
}

export default Profiles