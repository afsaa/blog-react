import React, { useEffect } from "react";
import Posts from "../components/Posts";
import Users from "../components/Users";
import { connect } from "react-redux";
import {
    loggedInUserAxiosRequest,
    getUsersAxiosRequest,
    getPostsAxiosRequest,
} from "../api";
import { loggedInRequest, getUsersRequest, getPostsRequest } from "../actions";
import Container from "@material-ui/core/Container";

type loggedInUser = {
    id: number;
    name: string;
    email: string;
    phoneNumber: number;
    user_type: string;
    createdAt: string;
    updatedAt: string;
};

function Home({
    loggedInUser,
    users,
    posts,
    token,
    loggedInRequest,
    getUsersRequest,
    getPostsRequest,
}: {
    loggedInUser?: loggedInUser;
    users?: Array<any>;
    posts?: Array<any>;
    token?: string;
    loggedInRequest: Function;
    getUsersRequest: Function;
    getPostsRequest: Function;
}) {
    useEffect(() => {
        if (token) {
            loggedInUserAxiosRequest(token)
                .then((result) => {
                    loggedInRequest(result.data.user);
                })
                .catch((err) => {
                    console.log(err);
                });
            getUsersAxiosRequest(token)
                .then((result) => {
                    getUsersRequest(result.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            getPostsAxiosRequest(token)
                .then((result) => {
                    getPostsRequest(result.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [token]);

    return (
        <>
            <Container>
                {loggedInUser?.user_type === "Administrador" ? (
                    <Users users={users} />
                ) : (
                    <Posts posts={posts} />
                )}
            </Container>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        loggedInUser: state.loggedInUser,
        users: state.users,
        posts: state.posts,
        token: state.token,
    };
};

const mapDispatchToProps = {
    loggedInRequest,
    getUsersRequest,
    getPostsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
