import { Switch, Route, Redirect } from "react-router";
import AuthRoute from "./components/AuthRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
    const isAuthenticated = true;

    return (
        <>
            <Switch>
                <Route path="/login" render={() => <Login />} />
                <Route path="/signup" render={() => <SignUp />} />
                <AuthRoute
                    authed={isAuthenticated}
                    exact={true}
                    path="/profile"
                    component={Profile}
                />
                <AuthRoute
                    authed={isAuthenticated}
                    exact={true}
                    path="/"
                    component={Home}
                />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}

export default App;
