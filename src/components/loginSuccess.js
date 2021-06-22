import { useEffect } from "react";

function LoginSuccess(props) {
   useEffect(() => {
      setTimeout(() => {
         window.close();
      }, 0);
   }, []);
   return null;
}

export default LoginSuccess;
