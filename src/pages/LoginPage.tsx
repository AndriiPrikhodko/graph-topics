import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import LoginForm from '../components/login-form/'
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
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/login')
    }, [navigate])

    return <LoginForm />
}

export default Login