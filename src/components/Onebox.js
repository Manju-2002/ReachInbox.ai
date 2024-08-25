import React, { useEffect, useState } from 'react';
import { getThreads, deleteThread } from '../api/api';

const Onebox = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await getThreads();
        setThreads(response.data);
      } catch (error) {
        console.error('Error fetching threads', error);
      }
    };
    fetchThreads();
  }, []);

  const handleDelete = async (threadId) => {
    try {
      await deleteThread(threadId);
      setThreads(threads.filter(thread => thread.id !== threadId));
    } catch (error) {
      console.error('Error deleting thread', error);
    }
  };

  return (
    <div>
      <h1>Onebox</h1>
      {threads.length > 0 ? (
        threads.map(thread => (
          <div
            key={thread.id}
            className="onebox-thread"
          >
            <p>{thread.subject}</p>
            <button onClick={() => handleDelete(thread.id)}>Delete</button>
            {/* Add more UI components here */}
          </div>
        ))
      ) : (
        <p>No threads available.</p>
      )}
    </div>
  );
};

export default Onebox;
