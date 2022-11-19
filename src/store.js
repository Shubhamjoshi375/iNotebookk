import { configureStore } from "@reduxjs/toolkit";
import {
  userReducer,
} from "./Reducers/user";
// import { likeReducer, myPostsReducer, userPostsReducer } from "./Reducers/Post";

const store = configureStore({
  reducer: {
    user: userReducer,
    // postOfFollowing: postOfFollowingReducer,
    // allUsers: allUsersReducer,
    // like: likeReducer,
  //   myPosts: myPostsReducer,
  //   userProfile: userProfileReducer,
  //   userPosts: userPostsReducer,
  },
});

export default store;