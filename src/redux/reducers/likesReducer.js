import { LIKE_POST } from "../types/postsTypes"


 const likesReducer = (store = [], action) => {
  switch (action.type) {
    case LIKE_POST:
      return store.map((post)=> {
				if (post._id === action.payload._id) return action.payload
        return post
			})
  
    default:
      return store
  }
}