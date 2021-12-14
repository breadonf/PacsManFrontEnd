import { useRouter } from "next/router";
import React, { useEffect, useContext } from 'react';

function withAuth(WrappedComponent) {
  
   
  return (props) => {
  if (typeof window !== "undefined") {
      
      const accessToken = window.localStorage.getItem("currentUser");
      if (!accessToken) {
        const router = useRouter()
        router.replace("/Login");
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
