import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

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

export const usersAxiosRequest = async (token) => {
    try {
        const usersAxiosResponse = await axios.get(`${BASE_URL}/users`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return usersAxiosResponse;
    } catch (error) {
        return error;
    }
};
