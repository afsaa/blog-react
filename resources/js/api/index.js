import axios from "axios";

const BASE_URL = "https://finanzas-saludables.herokuapp.com/api";

export const loginAxiosRequest = async (user) => {
    try {
        const loginAxiosResponse = await axios.post(`${BASE_URL}/login`, {
            email: user.email,
            password: user.password,
        });
        return loginAxiosResponse;
    } catch (error) {
        return error;
    }
};

export const registerAxiosRequest = async (newUser) => {
    try {
        const registerAxiosResponse = await axios.post(`${BASE_URL}/register`, {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            phone_number: newUser.phone_number,
            user_type: newUser.user_type,
        });
        return registerAxiosResponse;
    } catch (error) {
        return error;
    }
};

export const loggedInUserAxiosRequest = async (token) => {
    try {
        const loggedInUserAxiosResponse = await axios.get(`${BASE_URL}/user`, {
            params: {
                token: token,
            },
        });
        return loggedInUserAxiosResponse;
    } catch (error) {
        return error;
    }
};

export const logoutAxiosRequest = async (token) => {
    try {
        const logoutAxiosResponse = await axios.get(`${BASE_URL}/logout`, {
            params: {
                token: token,
            },
        });
        return logoutAxiosResponse;
    } catch (error) {
        return error;
    }
};

export const getUsersAxiosRequest = async (token) => {
    try {
        const getUsersAxiosResponse = await axios.get(`${BASE_URL}/users`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return getUsersAxiosResponse;
    } catch (error) {
        return error;
    }
};

export const getPostsAxiosRequest = async (token) => {
    try {
        const getPostsAxiosResponse = await axios.get(`${BASE_URL}/posts`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return getPostsAxiosResponse;
    } catch (error) {
        return error;
    }
};

export const deleteUserAxiosRequest = async (token, userId) => {
    try {
        const deleteUserAxiosResponse = await axios.delete(
            `${BASE_URL}/users/${userId}`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        return deleteUserAxiosResponse;
    } catch (error) {
        return error;
    }
};
