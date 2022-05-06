import React,{useState} from 'react';
import FacebookLogin from 'react-facebook-login';
 import {   Navigate} from 'react-router-dom';
 import './Login.css';
// import Home from '../component/Home/Home.jsx'
export default function FaceBook () {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});

const responseFacebook = (response) => {
  console.log(response);
  setData(response); 
  if (response.accessToken) {
    setLogin(true);
  } else {
    setLogin(false);
  }
}

const componentClicked = data =>{
  console.log("data" , data)
 
};
// const navigate = useNavigate()
 
return(
<div>
<div>
  {!login && (

    <FacebookLogin  className="facebook"
      appId="544231040743947"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
    />
  )}
  </div>
  {login && (
<Navigate to='/home' />
)}
  </div>
  );}


// EAAHuZBanbZBgsBAAhN7l47ieVZBGdpHtWjF5LtTFbZA1X2Vbxk28xQWNKu1uIDJBThx72Af66ZBZCesmR8x9qvVzUJhbC1FVENGf09akWs91vpQrux62OuyCZAViQxuF0mx60nAZC1PA8xzbu5kkrcghgYImsUSCp6RgSCfOl9tiBwZDZD 