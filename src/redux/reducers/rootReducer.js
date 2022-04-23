import { combineReducers } from "redux";
import { personReducer } from "./personReducer";
import postsReducer from "./postsReducer";
import { searchReducer } from "./searchReducer";
import { detailPostReducer } from "./detailPostReducer";

const rootReducer = combineReducers({
	posts: postsReducer,
	search: searchReducer,
	person: personReducer,
	likes: postsReducer,
	detailPost: detailPostReducer,
})


export default rootReducer