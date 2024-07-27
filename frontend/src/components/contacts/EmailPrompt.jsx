// EmailPrompt.jsx
import React, { useState, useEffect } from 'react';
import './EmailPrompt.css';

const EmailPrompt = () => {
  const [returnEmail, setReturnEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [allInputsFilled, setAllInputsFilled] = useState(false);

  useEffect(() => {
    setAllInputsFilled(subject !== '' && returnEmail !== '' && message !== '');
  }, [subject, returnEmail, message]);

  const send_msg = async () => {
    try {
      const response = await fetch('http://localhost:8889/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: returnEmail,
          userSubject: subject,
          content: message,
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='EmailMain'>
      {allInputsFilled && (
        <button onClick={send_msg}>Send</button>
      )}
      <p onClick={send_msg}>Email Me!</p>
      <input
        placeholder='Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        placeholder='Sender Email'
        value={returnEmail}
        onChange={(e) => setReturnEmail(e.target.value)}
      />
      <textarea
        className='MessageInput'
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default EmailPrompt;