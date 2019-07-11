import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL
} from "../constants/ActionTypes";

import API from "../utils/APIUtils";

import { loadUser } from "./auth";

// GET PROFILE
export const getProfile = () => (dispatch, getState) => {
  dispatch(loadUser());
  const user = getState().auth.user.id;
  API.get("profiles", {
    params: {
      user
    }
  })
    .then(res => {
      const profileID = res.data[0].id;
      API.get(`profiles/${profileID}/`)
        .then(response => {
          dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: response.data
          });
        })
        .catch(error => {
          dispatch({
            type: GET_PROFILE_FAIL,
            payload: error
          });
        });
    })
    .catch(err => err);
};
