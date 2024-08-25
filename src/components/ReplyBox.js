import React, { useState } from 'react';
import { sendReply } from '../api/api';

const ReplyBox = ({ threadId }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleReply = async () => {
    try {
      await sendReply(threadId, 'your-email@example.com', email, subject, body);
      // Handle success
    } catch (error) {
      console.error('Error sending reply', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="To"
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button onClick={handleReply}>Send</button>
    </div>
  );
};

export default ReplyBox;
