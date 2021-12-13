import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      router.replace("/Login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
