import { LOGIN_REQUEST, REGISTER_REQUEST } from "./actionTypes";

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const registerRequest = (payload) => ({
  type: REGISTER_REQUEST,
  payload,
});
