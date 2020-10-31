import {
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    LOGGED_IN_REQUEST,
    GET_USERS_REQUEST,
    GET_POSTS_REQUEST,
    LOGOUT_REQUEST,
    DELETE_USER_REQUEST,
} from "./actionTypes";

export const loginRequest = (payload) => ({
    type: LOGIN_REQUEST,
    payload,
});

export const registerRequest = (payload) => ({
    type: REGISTER_REQUEST,
    payload,
});

export const loggedInRequest = (payload) => ({
    type: LOGGED_IN_REQUEST,
    payload,
});

export const getUsersRequest = (payload) => ({
    type: GET_USERS_REQUEST,
    payload,
});

export const getPostsRequest = (payload) => ({
    type: GET_POSTS_REQUEST,
    payload,
});

export const deleteUserRequest = (payload) => ({
    type: DELETE_USER_REQUEST,
    payload,
});

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST,
});
