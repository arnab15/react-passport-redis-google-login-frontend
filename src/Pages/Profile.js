import React, { useEffect, useState } from "react";
import axios from "axios";
function Profile(props) {
   const [profile, setProfile] = useState();
   const getProfile = async () => {
      try {
         const { data } = await axios.get("http://localhost:4000/profile", {
            withCredentials: true,
         });
         setProfile(data);
         console.log(data);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      getProfile();
   }, []);
   return (
      <div>
         <h1>Profile Pages</h1>
         <div>{profile && JSON.stringify(profile, null, 4)}</div>
      </div>
   );
}

export default Profile;
