
import MainNavBar from './MainNavBar';

function Layout(props) {
    return (
        <div>
            <MainNavBar />
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;