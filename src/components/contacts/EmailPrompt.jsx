import React from 'react'
import './EmailPrompt.css'

const EmailPrompt = () => {
  return (
    <div className='EmailMain'>
      <p>Email Me!</p>
          <input className='ReturnEmail' />
          <input className='Subject' />
          <input className='MailContents' />
    </div>
  )
}

export default EmailPrompt