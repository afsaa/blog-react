import React from "react";
import Home from "./containers/Home";
import AppBar from "./components/AppBar";
import Register from "./containers/Register";
import Login from "./containers/Login";
import BlogPost from "./components/BlogPost";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({
    children,
    token,
    exact,
    path,
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
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

function App({ token, posts }: { token?: string; posts?: Array<any> }) {
    return (
        <div className="App">
            <AppBar />
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
                        <BlogPost posts={posts} />
                    </Route>
                    <Route path="*"></Route>
                </Switch>
            </Router>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        token: state.token,
        posts: state.posts,
    };
};

export default connect(mapStateToProps, null)(App);
