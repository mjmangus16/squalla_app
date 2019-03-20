import {
  GET_NOTIFICATIONS,
  CLEAR_ALL_NOTIFICATIONS,
  GET_DASHBOARD,
  GET_PERFORMANCE,
  GET_ROUNDS,
  GET_ACHIEVEMENTS,
  GET_FRIENDS,
  GET_FRIEND_NAME,
  GET_USER_BY_NAME,
  ADD_FRIEND,
  GET_USER_COURSES,
  GET_COURSES,
  ADD_COURSE,
  EDIT_COURSE,
  CLEAR_ADD_COURSE,
  SUBMIT_ROUND,
  CLEAR_CURRENT_PROFILE,
  PROFILE_LOADING
} from "../actions/types";

const initialState = {
  notifications: null,
  dashboard: null,
  performance: null,
  rounds: null,
  achievements: null,
  friends: null,
  friend: null,
  foundUser: null,
  addFriend: null,
  myCourses: null,
  courses: null,
  addCourse: null,
  editCourse: null,
  submitRound: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
        loading: false
      };
    case CLEAR_ALL_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
        loading: false
      };
    case GET_DASHBOARD:
      return {
        ...state,
        dashboard: action.payload,
        loading: false
      };
    case GET_PERFORMANCE:
      return {
        ...state,
        performance: action.payload,
        loading: false
      };
    case GET_ROUNDS:
      return {
        ...state,
        rounds: action.payload,
        loading: false
      };
    case GET_ACHIEVEMENTS:
      return {
        ...state,
        achievements: action.payload,
        loading: false
      };
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
    case GET_FRIEND_NAME:
      return {
        ...state,
        friend: action.payload,
        loading: false
      };
    case GET_USER_BY_NAME:
      return {
        ...state,
        foundUser: action.payload,
        loading: false
      };
    case ADD_FRIEND:
      return {
        ...state,
        addFriend: action.payload,
        loading: false
      };
    case GET_USER_COURSES:
      return {
        ...state,
        myCourses: action.payload,
        loading: false
      };
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false
      };
    case ADD_COURSE:
      return {
        ...state,
        addCourse: action.payload,
        loading: false
      };
    case EDIT_COURSE:
      return {
        ...state,
        editCourse: action.payload,
        loading: false
      };
    case CLEAR_ADD_COURSE:
      return {
        ...state,
        addCourse: null,
        loading: false
      };
    case SUBMIT_ROUND:
      return {
        ...state,
        submitRound: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        notifications: null,
        dashboard: null,
        performance: null,
        rounds: null,
        achievements: null,
        friends: null,
        friend: null,
        foundUser: null,
        addFriend: null,
        userCourses: null,
        myCourses: null,
        courses: null,
        addCourse: null,
        editCourse: null,
        submitRound: null,
        loading: false
      };
    default:
      return state;
  }
}
