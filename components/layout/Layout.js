import MainNavBar from "./MainNavBar";

function Layout({ usernameState, setUsername, children }) { // layout component to make wrap the pages with a navbar
  return (
    <div>
      <MainNavBar usernameState={usernameState} setUsername={setUsername} />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
