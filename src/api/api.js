import axios from 'axios';

// Set the base URL for your API
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
});

// Authentication
export const login = (email, password) => {
  return api.post('/login', { email, password });
};

// Onebox Operations
export const getThreads = () => {
  return api.get('/onebox/list');
};

export const getThreadById = (threadId) => {
  return api.get(`/onebox/${threadId}`);
};

export const deleteThread = (threadId) => {
  return api.delete(`/onebox/${threadId}`);
};

// Reply Operation
export const sendReply = (threadId, from, to, subject, body) => {
  return api.post(`/reply/${threadId}`, {
    from,
    to,
    subject,
    body,
  });
};
