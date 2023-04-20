import React,{useState} from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(false)
    

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username,password);
        try {
            const response = await axios.post('http://172.105.58.224:3582/auth/login',{
                username:username,password:password
            })
            console.log(response.data);
            if(response){
                
                navigate('/home')
            }
        } catch (error) {
          console.log(error);
          setError(true)
        }
      };
    
    

  return (
    <div className='login'>
        
        <form className='form' onSubmit={handleSubmit}>
            <div className='twitter-icon'>
                <TwitterIcon />
            </div>
            <div className='login-title'>
            <h1>Login in to Twitter</h1>
            </div>
        
        <div className='form-row'>
        <label htmlFor='username' className='form-label'>
            Username
        </label>
        <input
            type='text'
            className='form-input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id='username'
        />
        </div>
        <div className='form-row'>
        <label htmlFor='password' className='form-label'>
            Password
        </label>
        <input
            type='password'
            className='form-input'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type='submit' className='login-btn '>
        submit
        </button>
        {error && <p className='error-text'>Invalid Username or Password</p>}
        </form>
        
    </div>
    )
}

export default LoginPage
