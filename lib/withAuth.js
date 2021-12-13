import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

<<<<<<< HEAD
      const accessToken = localStorage.getItem("currentUser");
=======
    const accessToken = localStorage.getItem("accessToken");
>>>>>>> 931d079ff1f712e543e14f0bdffe22a05ef764e1

    if (!accessToken) {
      router.replace("/Login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
