import { Switch, Route, Redirect } from "react-router";
import AuthRoute from "./components/AuthRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import useToken from "./hooks/useToken";
import "./App.css";

function App() {
    const { token, setToken } = useToken();
    const isAuthenticated = token ? true : false;

    return (
        <>
            <Switch>
                <Route
                    path="/login"
                    render={() => <Login setToken={setToken} />}
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
