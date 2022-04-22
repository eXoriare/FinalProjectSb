import {SET_ALL_POSTS, ADD_NEW_POST, DELETE_POST, LIKE_POST} from '../types/postsTypes'

const postsReducer = (store = [], action) => {

	switch (action.type) {
		case SET_ALL_POSTS:
			return action.payload
		
		case ADD_NEW_POST: 
			return [
				...store,
				action.payload
			]

		case DELETE_POST:
			return store.filter((post) => post._id !== action.payload)
		
		case LIKE_POST:
			return store.map((post) => {
				if (post._id === action.payload._id) return action.payload
				return post
			})

		default:
			return store
	}
}

export default postsReducer