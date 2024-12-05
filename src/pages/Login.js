import React, { useState } from 'react'
import LoginBox from '../components/login/LoginBox.jsx'
import RegisterBox from '../components/register/RegisterBox.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({setLoggedIn}) => {
    const [register, setRegister] = useState(false);
    if(register){
        return(
            <div>
                <ToastContainer/>
                <RegisterBox setRegister={setRegister} setLogin={setLoggedIn}/>
            </div>
        )
    }else{
        return(
            <div>
                <ToastContainer/>
                <LoginBox setRegister={setRegister} setLogin={setLoggedIn}/>
            </div>
        )
    }

}

export default Login