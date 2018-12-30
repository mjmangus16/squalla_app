import axios from "axios";

import { GET_PROFILE } from "./types";

// Get current profile
export const getProfile = () => dispatch => {
  axios
    .get("/api/profiles/current")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};
