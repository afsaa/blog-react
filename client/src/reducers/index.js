const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                token: action.payload,
            };
        case "REGISTER_REQUEST":
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case "LOGGED_IN_REQUEST":
            return {
                ...state,
                loggedInUser: action.payload,
            };
        case "GET_POSTS_REQUEST":
            return {
                ...state,
                posts: action.payload,
            };
        case "GET_USERS_REQUEST":
            return {
                ...state,
                users: action.payload,
            };
        case "DELETE_USER_REQUEST":
            return {
                ...state,
                users: [
                    ...state.users.filter((user) => {
                        return user.id !== action.payload;
                    }),
                ],
            };
        case "LOGOUT_REQUEST":
            return {
                loggedInUser: {},
                users: [],
                posts: [],
            };
        default:
            return state;
    }
};

export default reducer;
