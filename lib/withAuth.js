import { useRouter } from "next/router";
import React, { useEffect, useContext } from 'react';
import AppContext from "../lib/AppContext";

function withAuth(WrappedComponent) {
  
   
  return (props) => {
  if (typeof window !== "undefined") {
      
      const accessToken = window.localStorage.getItem("currentUser");
      console.log(accessToken)
      if (!accessToken) {
<<<<<<< HEAD
        const router = useRouter()
        router.replace("/Login");
=======
        router.replace("/login");
>>>>>>> a5173433b79fad56b0916a31c8b91e3f3b174330
        return null;
      }
      return <WrappedComponent {...props} />;
    ;
  } else {
   
    return null
  }
  
}
};

export default withAuth;
