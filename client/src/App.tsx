import React from "react";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useParams
} from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({
    children,
    token,
    exact,
    path
}: {
    children: any;
    token?: string;
    exact?: boolean;
    path: string;
}) {
    return (
        <Route
            exact={exact}
            path={path}
            render={({ location }) =>
                token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

function BlogPost() {
    let { slug } = useParams();
    return <div>Now showing post {slug}</div>;
}

function App({ token }: { token?: string }) {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <PrivateRoute token={token} exact path="/">
                        <Home />
                    </PrivateRoute>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/blog/:slug">
                        <BlogPost />
                    </Route>
                    <Route path="*"></Route>
                </Switch>
            </Router>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps, null)(App);
