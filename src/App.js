import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import LoginSuccess from "./components/loginSuccess";
import Profile from "./Pages/Profile";
import axios from "axios";

function App() {
   const handelLogout = async () => {
      try {
         await axios.get("http://localhost:4000/logout", {
            withCredentials: true,
         });
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className="App">
         <nav>
            <Link className="login-button" to="/login">
               Login
            </Link>
            <p onClick={handelLogout} className="logout-button">
               Logout
            </p>
         </nav>
         <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/login/success" component={LoginSuccess} />
            <Route exact path="/login/error" component={Login} />
            <Route exact path="/profile" component={Profile} />
         </Switch>
      </div>
   );
}

export default App;
