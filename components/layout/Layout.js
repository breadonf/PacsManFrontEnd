
import MainNavBar from './MainNavBar';

function Layout({ usernameState,
    setUsername, children}) {
    return (
        <div>
            <MainNavBar  usernameState={usernameState}
              setUsername={setUsername}/>
            <main>{children}</main>
        </div>
    )
}

export default Layout;