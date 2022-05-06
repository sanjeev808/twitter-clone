import React,{useState} from 'react'
import GoogleLogin from 'react-google-login';
import {   Navigate} from 'react-router-dom';
import './Login.css'

export default function Google() {

    const [login, setLogin] = useState(false);
  const [data, setData] = useState({});

    const responseGoogle = (response) => {
        console.log(response);
        setData(response); 
  if (response.accessToken) {
    setLogin(true);
  } else {
    setLogin(false);
  }
      }
  return (
    <div>
        <div>  
        {!login && (

         <GoogleLogin className='google'
    clientId="309418208501-934ob68m0sdpgjdthqseiihqn6r8otqd.apps.googleusercontent.com"
    // buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  )} </div>
     {login && (
<Navigate to='/home' />
)}
    </div>
  )
}
