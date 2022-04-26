import { axiosInstance } from "../../config/axios";
import { SIGN_UP } from "../types/personType";

export const signUp = (person) => ({
  type: SIGN_UP,
  payload: person,
});

export const signUpQuery =
  ({ email, password, successCb, errorCb }) =>
  async (dispatch) => {
    try {
      const response = await axiosInstance.post("signup", {
      email,
      password,
    });

    if (response.status === 201) {
      dispatch(
      signUpQuery({email, password, cb: successCb})
      )
    }
      
    } catch (error) {
      const response = await axiosInstance.post("signup", {
        email,
        password,
      });
      
      if (response.status === 400) {
      errorCb('Некорректно заполнено одно из полей')
    } else if (response.status === 409) {
        errorCb('Юзер с указанным email уже существует')
      }
    }
     
    
  };