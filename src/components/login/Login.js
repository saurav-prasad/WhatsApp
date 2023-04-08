import React from 'react'
import './login.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
    // * Google Login
    const auth = getAuth();
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log("user", user);
                console.log("token", token);
                console.log("credential", credential);
            }).catch((error) => {
                // Handle Errors here.
                console.log(error);
            });
    }

    return (
        <div className='login'>
            <div className="loginContainer">
                <img className='loginImg' src="https://cdn.pixabay.com/photo/2021/05/22/11/38/whatsapp-6273368_960_720.png" alt="" />
                <h1 className='loginHead'>Sign in to WhatsApp</h1>
                <div className="loginBtnBox" onClick={googleLogin}>
                    <img className='loginGoogleImg' src="/img/google_g_icon.svg" alt="" />
                    <span className='loginText'>Sign in with google</span>
                </div>
            </div>
        </div>
    )
}

export default Login