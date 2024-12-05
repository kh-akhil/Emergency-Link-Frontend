import React, {useState} from 'react'
import './RegisterBox.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import logo from '../../logo.png'


const RegisterBox = ({setRegister, setLogin}) => {
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setRegData(regData => ({...regData, [name]:value}))
    console.log(regData)
  }
  const onSubmitHandler = async(event) =>{
    event.preventDefault();
    const response = await axios.post('http://127.0.0.1:8000/user/register/', regData)
    if(response.data.success){
      setRegData({
        name: "",
        email: "",
        password: ""
      })
      console.log(response.data);
      toast.success("User registered");
      setRegister(false);
    }
  }
  return (
    <div className='register-container'>
      <div className='register-form-container'>
        <img src={logo} className='register-image' alt='Logo'/>
        <span className="register-title">Register</span>
        <form className="form-main" onSubmit={onSubmitHandler}> 
          <input type="name" name='name' value={regData.name} placeholder='Enter your Name' required onChange={onChangeHandler}/>
          <input type="email" name='email' value={regData.email} placeholder='Enter your email address' required onChange={onChangeHandler}/>
          <input type="password" name='password' value={regData.password} placeholder='Enter your password' onChange={onChangeHandler}/>
          <button type='submit' className="submit-btn">Register</button>
        </form>
        <span onClick={()=>{setRegister(false)}} className='switch' >Already have an account ? Click here to login</span>
      </div>
    </div>
  )
}

export default RegisterBox