import { useState } from "react";
import { Switch, Route, Redirect } from "react-router";
import AuthRoute from "./components/AuthRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("token") ? true : false
    );

    // const isAuthenticated = localStorage.getItem("token") ? true : false;

    return (
        <>
            <Switch>
                <Route
                    path="/login"
                    render={() => (
                        <Login setIsAuthenticated={setIsAuthenticated} />
                    )}
                />
                <Route path="/signup" render={() => <SignUp />} />
                <AuthRoute
                    authed={isAuthenticated}
                    exact={true}
                    path="/profile"
                    component={Profile}
                />
                <Route exact={true} path="/" component={Home} />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}

export default App;
