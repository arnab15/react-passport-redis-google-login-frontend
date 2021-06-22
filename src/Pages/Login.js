import React from "react";
import GoogleButton from "react-google-button";
import { useHistory } from "react-router-dom";
import "../App.css";
function Login(props) {
   const history = useHistory();
   const handelGoogleLogin = () => {
      let timer = null;
      const googleLoginURL = "http://localhost:4000/login/google";
      const newWindow = window.open(
         googleLoginURL,
         "_blank",
         "width=500,height=600"
      );

      if (newWindow) {
         timer = setInterval(() => {
            if (newWindow.closed) {
               console.log("Yay we're authenticated");
               if (timer) clearInterval(timer);
               history.push("/profile");
            }
         }, 500);
      }
   };
   return (
      <div>
         <GoogleButton className="google-button" onClick={handelGoogleLogin} />
      </div>
   );
}

export default Login;
