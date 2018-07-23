import getToken from '../helpers/token';

export const UPDATE_PROFILE_START = 'UPDATE_PROFILE_START';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';
export const RESET_PROFILE_SUCCESS = 'RESET_PROFILE_SUCCESS';

function updateProfileStart() {
  return {
    type: UPDATE_PROFILE_START
  }
}

function updateProfileSuccess(user) {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    user,
    success: 'Successfully updated user profile'
  }
}

function updateProfileError(error) {
  return {
    type: UPDATE_PROFILE_ERROR,
    error
  }
}

export function resetProfileSuccess() {
  return {
    type: RESET_PROFILE_SUCCESS
  }
}

export function updateUserProfile(data, username) {
  // Get token from local storage
  const token = getToken();

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // add JWT to headers
    },
    body: JSON.stringify({ user: data })
  }

  return (dispatch) => {
    dispatch(updateProfileStart());

    fetch(`/api/users/${username}`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error with editing profile');
        }

        return res.json();
      })
      .then(({ user }) => {
        // Successful PUT request. Update redux state with
        // the new updated user profile
        dispatch(updateProfileSuccess(user));
      })
      .catch(err => dispatch(updateProfileError(err.message)))
  }
}
