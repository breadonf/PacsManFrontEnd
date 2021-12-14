import React, {useState} from "react";

export const AppContext = React.createContext({
    authenticated: null, // true or false
    login : function (userData) {},
    logout : function () {}
});

export function AppProvider(props) {
    const {value, children} =props
    const [authenticated, setAuthenticated] = useState()
    function login (userData) {
        setAuthenticated(userData)
    }
    function logout() {
        setAuthenticated(null)
    }
    const context = { authenticated: authenticated, login: login, logout: logout}
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}

