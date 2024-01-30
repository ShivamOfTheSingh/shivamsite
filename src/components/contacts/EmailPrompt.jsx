import React, { useState, useEffect } from 'react';
import './EmailPrompt.css';

const EmailPrompt = () => {
  const [returnEmail, setReturnEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [allInputsFilled, setAllInputsFilled] = useState(false);

  useEffect(() => {
    // Check if all input fields are filled
    if (returnEmail && subject && message) {
      setAllInputsFilled(true);
    } else {
      setAllInputsFilled(false);
    }
  }, [returnEmail, subject, message]);

  return (
    <div className='EmailMain'>
      <p className='Title'>Email Me!</p>
      <form className='InputForm'>
        <label className='InputField'>
          <input
            className='ReturnEmail'
            placeholder="Return Email"
            value={returnEmail}
            onChange={(e) => setReturnEmail(e.target.value)}
          />
        </label>
        <label className='InputField'>
          <input
            className='Subject'
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label className='InputField'>
          <textarea
            className='MailContents'
            placeholder="Message"
            rows="4"
            cols="50"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </form>
      {allInputsFilled && (
        <button className='SendButton'>Send</button>
      )}
    </div>
  );
};

export default EmailPrompt;
