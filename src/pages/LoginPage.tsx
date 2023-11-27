import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import axios from 'axios';

// const sessionKey = 'your-session-key'; // replace with your session key

// axios.get('https://api.example.com/data', {
//   headers: {
//     'Authorization': `Bearer ${sessionKey}`
//   }
// })
// .then(response => console.log(response.data))
// .catch(error => console.error('Error:', error));


const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/login');
    }, [navigate]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    // e.preventDefault();
    // const { data } = await axios.post('/api/login', { username, password });
    // // Save the returned token in local storage (or cookies)
    // localStorage.setItem('token', data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;