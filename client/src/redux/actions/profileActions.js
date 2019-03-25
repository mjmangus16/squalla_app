import axios from "axios";

import {
  GET_NOTIFICATIONS,
  CLEAR_ALL_NOTIFICATIONS,
  GET_DASHBOARD,
  GET_PERFORMANCE,
  GET_ROUNDS,
  GET_ACHIEVEMENTS,
  GET_FRIENDS,
  GET_USER_BY_NAME,
  ADD_FRIEND,
  GET_USER_COURSES,
  GET_COURSES,
  ADD_COURSE,
  EDIT_COURSE,
  CLEAR_ADD_COURSE,
  SUBMIT_ROUND,
  CLEAR_SUBMIT_ROUND,
  CLEAR_CURRENT_PROFILE,
  PROFILE_LOADING
} from "./types";

export const getNotifications = () => dispatch => {
  axios
    .get("/api/notifications/")
    .then(res =>
      dispatch({
        type: GET_NOTIFICATIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_NOTIFICATIONS,
        payload: {}
      })
    );
};

export const clearAllNotifications = () => dispatch => {
  axios
    .get("/api/notifications/clearall")
    .then(res =>
      dispatch({
        type: CLEAR_ALL_NOTIFICATIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: CLEAR_ALL_NOTIFICATIONS,
        payload: {}
      })
    );
};

// Get current user dashboard information
export const getDashboardData = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/dashboard")
    .then(res =>
      dispatch({
        type: GET_DASHBOARD,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DASHBOARD,
        payload: {}
      })
    );
};

export const getPerformanceData = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/performance")
    .then(res =>
      dispatch({
        type: GET_PERFORMANCE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PERFORMANCE,
        payload: {}
      })
    );
};

export const getRoundsData = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/rounds")
    .then(res =>
      dispatch({
        type: GET_ROUNDS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ROUNDS,
        payload: {}
      })
    );
};

export const getAchievementsData = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/achievements")
    .then(res =>
      dispatch({
        type: GET_ACHIEVEMENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ACHIEVEMENTS,
        payload: {}
      })
    );
};

export const getFriendsData = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/friends")
    .then(res =>
      dispatch({
        type: GET_FRIENDS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FRIENDS,
        payload: {}
      })
    );
};

export const getUserByName = data => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/api/friends/name", data)
    .then(res =>
      dispatch({
        type: GET_USER_BY_NAME,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_BY_NAME,
        payload: {}
      })
    );
};

export const addFriend = data => dispatch => {
  axios
    .post("/api/friends/add", data)
    .then(res =>
      dispatch({
        type: ADD_FRIEND,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_FRIEND,
        payload: {}
      })
    );
};

export const getUserCourses = () => dispatch => {
  axios
    .get("/api/courses")
    .then(res =>
      dispatch({
        type: GET_USER_COURSES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_COURSES,
        payload: {}
      })
    );
};

export const getCourses = data => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/api/pdgaAPI/search", data)
    .then(res =>
      dispatch({
        type: GET_COURSES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COURSES,
        payload: {}
      })
    );
};

export const addCourse = data => dispatch => {
  axios
    .post("/api/courses/addcourse", data)
    .then(res =>
      dispatch({
        type: ADD_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_COURSE,
        payload: {}
      })
    );
};

export const editCourse = data => dispatch => {
  axios
    .post("/api/courses/editcourse", data)
    .then(res =>
      dispatch({
        type: EDIT_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: EDIT_COURSE,
        payload: {}
      })
    );
};

export const submitRound = data => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/api/addRound/submit", data)
    .then(res =>
      dispatch({
        type: SUBMIT_ROUND,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SUBMIT_ROUND,
        payload: {}
      })
    );
};

export const clearSubmitRound = () => {
  return {
    type: CLEAR_SUBMIT_ROUND
  };
};

export const clearAddCourse = () => {
  return {
    type: CLEAR_ADD_COURSE
  };
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
