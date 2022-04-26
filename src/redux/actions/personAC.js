import SignUp from "../../components/Auth/SignUp/SignUp";
import { axiosInstance } from "../../config/axios";
import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../types/personType";

const token = 'token'

export const signIn = (person) => ({
  type: SIGN_IN,
  payload: person,
});

export const signInQuery =
  ({ email, password, cb }) =>
  async (dispatch) => {
    const response = await axiosInstance.post("signin", {
      email,
      password,
    });

    const person = response.data;

    dispatch(
      signIn({
        ...person.data,
        token: person.token,
      })
    );

    typeof cb === 'function' && cb();
  };

  export const signUp = (person) => ({
    type: SIGN_UP,
    payload: person,
  });
  
  export const signUpQuery =
    ({ email, password, name, cb }) =>
    async (dispatch) => {
      const response = await axiosInstance.post("signup", {
        email,
        password,
        name,
      })
  
      const person = response.data;
      dispatch(
        signUp({
          ...person.data
        })
      );
      const responseSignUp = await axiosInstance.post('signUp', {
        email: person.email,
        password,
      })
      const userSignUp = responseSignUp.data
      dispatch(
        SignUp({
          ...userSignUp.data,
          token: userSignUp.token,
        }),
      )
      typeof cb === 'function' && cb()
      localStorage.setItem(token, userSignUp.token)
    };

export const signOut = (person) => ({
      type: SIGN_OUT,
      payload: {
        ...person,
        token: '',
      },
}
)