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
      const responseSignIn = await axiosInstance.post('signin', {
        email: person.email,
        password,
      })
      const userSignIn = responseSignIn.data
      dispatch(
        signIn({
          ...userSignIn.data,
          token: userSignIn.token,
        }),
      )
      typeof cb === 'function' && cb()
      localStorage.setItem(token, userSignIn.token)
    };

export const signOut = (person) => ({
      type: SIGN_OUT,
      payload: {
        ...person,
        token: '',
      },
}
)