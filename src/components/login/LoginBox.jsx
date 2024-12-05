import React from 'react'
import './LoginBox.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../../logo.png'

const LoginBox = ({setRegister, setLogin}) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setLoginData(loginData => ({...loginData, [name]:value}))
    console.log(loginData)
  }
  const gotoHome = () =>{
    navigate('/home');
  }
  const onSubmitHandler = async(event) =>{
    event.preventDefault();
    const response = await axios.post('http://127.0.0.1:8000/user/login/', loginData)
    if(response.data.success){
      setLoginData({
        email: "",
        password: ""
      })
      toast.success("User logged in");
      console.log(response.data.id);
      setLogin(true);
      if(response.data.id){
        localStorage.setItem('id', response.data.id)
        gotoHome(response.data.id);
      }else{
        toast.error('Something went wrong');
      }
    }else{
      toast.error(response.data.message);
    }
  }
  return (
    <div className='login-container'>
        <div className='login-form-container'>
            <img src={logo} className='login-image' alt='Logo'/>
            <span className="login-title">Login</span>
            <form className="form-main" onSubmit={onSubmitHandler}> 
                <input type="email" name='email' value={loginData.email} placeholder='Enter your email address' required onChange={onChangeHandler} />
                <input type="password" name='password' value={loginData.password} placeholder='Enter your password' onChange={onChangeHandler}/>
                <button type='submit' className="submit-btn">Log In</button>
            </form>
            <span onClick={()=>{setRegister(true)}} className='switch' >No account ? Click here to Sign Up</span>
        </div>
    </div>
  )
}

export default LoginBox