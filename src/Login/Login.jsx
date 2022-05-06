import React,{ useState} from "react";
import "./Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import twitter from '../images/twitterlogin.png'
// import ReactFacebokLogin from './FaceBook.jsx'
import FaceBook from "./FaceBook.jsx";
import Google from './Google.jsx'
import Modal from "./Model";
import {Button} from '@material-ui/core'


export default function Login() {
const [openModal ,setOpenModal] = useState(false)
  return (
    <div className="login">
      <div className="loginlogo">
        <img src={twitter} alt="vsdvds" className="twitterimg" />
        <span>
          <TwitterIcon className="twittericon" />
        </span>
      </div>
      <div className="loginData">
        <div className="outerside">
          <span>
            <TwitterIcon className="Headericon" />
          </span>
          <div className="heading">
            <h1>Happening now</h1>
          </div>
          <div className="heading2">
            <h3>Join Twitter today</h3>
          </div>
          <div className="contact-container">
            <div className="faceboook-btn"><FaceBook/></div>
            <br />
            <Button  className="google-btn"><Google/></Button>

            <p className="text-align-center">or</p>
            <Button variant='outlined' type="button" className="email-sign" onClick={()=>{setOpenModal(true)}}> Sign up with phone or email</Button>
            {openModal && <Modal closeModal={setOpenModal}/>}
          </div>
          <div>
            <h3 className="already">Already have an account</h3>
            <Button variant='outlined'  fullWidth  className="Sign-btn">Sign in</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
