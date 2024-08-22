import { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

export default function Home() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = JSON.parse(localStorage.getItem('users'));
      setUser(storedUser);
    }
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch('/api/socket'); // Ensure server-side socket is initialized
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  };

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <h1>Welcome, {user?.username || 'Guest'}</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
