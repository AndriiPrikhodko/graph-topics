import './LoginForm.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm: React.FC = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement>
  = event => {
      setUsername(event.target.value)
  }

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement>
  = event => {
      setPassword(event.target.value)
  }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()

        // import axios from 'axios';

        // const sessionKey = 'your-session-key'; // replace with your session key

        // axios.get('https://api.example.com/data', {
        //   headers: {
        //     'Authorization': `Bearer ${sessionKey}`
        //   }
        // })
        // .then(response => console.log(response.data))
        // .catch(error => console.error('Error:', error));

        // const response = await fetch('/api/authenticate', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ username, password }),
        //   });

        // if (response.ok) {
        if (username === 'andrii' && password === 'prykhodko'){
        // const { token } = await response.json();
            const token = 'true'
            // Store the token in local storage or in a cookie
            localStorage.setItem('token', token)

            // Redirect to the next page
            navigate('/graph')
        } else {
        // Handle error
            console.error('Authentication failed')
        }
    }

    return (
        <div className='login-container'>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
            </link>
            <div className="login">
                <h2 className="active"> sign in </h2>
                <h2 className="nonactive"> sign up </h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="text" name="username" onChange={handleEmailChange}/>
                    <span>username</span>
                    <br/>
                    <br/>
                    <input type="password" className="text" name="password" onChange={handlePasswordChange} />
                    <span>password</span>
                    <button className="signin">
      Sign In
                    </button>
                    <hr/>
                    <a href="#">Forgot Password?</a>
                </form>
            </div>
        </div>
    )
}

export default LoginForm