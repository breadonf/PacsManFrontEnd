
import MainNavBar from './MainNavBar';

// layout component to make wrap the pages with a navbar 

function Layout(props) {
    return (
        <div>
            <MainNavBar />
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;