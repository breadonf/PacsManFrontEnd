import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
  if (typeof window !== "undefined") {
      const router = useRouter();
      const accessToken = window.localStorage.getItem("currentUser");
      if (!accessToken) {
        router.replace("/Login");
        return null;
      }
      return <WrappedComponent {...props} />;
    ;
  }
  return null
}
};

export default withAuth;
