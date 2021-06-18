import { Switch, Route, Redirect } from "react-router";
import AuthRoute from "./components/AuthRoute";
import ContentPage from "./components/ContentPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import useUserId from "./hooks/useUserId";
import useToken from "./hooks/useToken";
import "./App.css";

function App() {
    const { token, setToken } = useToken();
    const { setUserId } = useUserId();
    const isAuthenticated = token ? true : false;

    return (
        <>
            <Switch>
                <Route
                    path="/login"
                    render={() => (
                        <Login setToken={setToken} setUserId={setUserId} />
                    )}
                />
                <Route
                    path="/signup"
                    render={() => (
                        <SignUp setToken={setToken} setUserId={setUserId} />
                    )}
                />
                <AuthRoute
                    authed={isAuthenticated}
                    exact={true}
                    path="/profile"
                    component={() => (
                        <ContentPage setToken={setToken}>
                            <Profile />
                        </ContentPage>
                    )}
                />
                <Route
                    exact={true}
                    path="/"
                    render={() => (
                        <ContentPage setToken={setToken}>
                            <Home />
                        </ContentPage>
                    )}
                />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}

export default App;
