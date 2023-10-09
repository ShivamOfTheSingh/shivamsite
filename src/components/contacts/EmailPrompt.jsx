import React from 'react';
import './EmailPrompt.css';

const EmailPrompt = () => {
  return (
    <div className='EmailMain'>
      <p className='Title'>Email Me!</p>
      <form className='InputForm'>
        <label className='InputField'>
          <input className='ReturnEmail' placeholder="Return Email" />
        </label>
        <label className='InputField'>
          <input className='Subject' placeholder="Subject" />
        </label>
        <label className='InputField'>
          <textarea className='MailContents' placeholder="Message" rows="4" cols="50" />
        </label>
      </form>
    </div>
  );
};

export default EmailPrompt;