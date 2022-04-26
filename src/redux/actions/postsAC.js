import { axiosInstance } from "../../config/axios";
import { ADD_NEW_POST, DELETE_POST, SET_ALL_POSTS } from "../types/postsTypes";

export const setAllPosts = (allPosts) => ({
  type: SET_ALL_POSTS,
  payload: allPosts,
});

export const loadAllPosts = (searchValue) => async (dispatch) => {
  const response = await axiosInstance.get("posts/search/", {
    params: {
      query: searchValue,
    },
  });

  const postsFromApi = response.data;

  dispatch(setAllPosts(postsFromApi));
};

export const addNewPost = (allPosts) => ({
  type: ADD_NEW_POST,
  payload: allPosts,
});

export const queryNewPost = (post) => async (dispatch) => {

  const response = await axiosInstance.post("posts", post);

    if (response.status === 201) {
    const postFromApi = await response.data;
    dispatch(addNewPost(postFromApi));
    } else {
      alert('Что-то пошло не так...')
    }
};

const deletePost = (_id) => ({
  type: DELETE_POST,
  payload: _id,
})

export const deletePostQuery = (_id) => async (dispatch) => {
  const response = await axiosInstance.delete(`posts/${_id}`, 
)

  if (response.status === 200) {
    dispatch(deletePost(_id))
  }else {
    window.alert('Вы пытаетесь удалить чужой пост')
  }
}