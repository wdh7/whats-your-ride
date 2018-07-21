export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR';

function registerStart() {
  return {
    type: REGISTER_START
  }
}

function registerSuccess(message) {
  return {
    type: REGISTER_SUCCESS,
    message
  }
}

function registerError(error) {
  return {
    type: REGISTER_ERROR,
    error
  }
}

// Start the POST request to register the user.
// Update state with success or error message.
export function register(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: data })
  }

  return (dispatch) => {
    dispatch(registerStart());

    return fetch('/api/users', options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error with registration');
        }

        return res.json()
      })
      .then(({ message }) => {
        dispatch(registerSuccess(message));
        return { redirect: true };
      })
      .catch(err => dispatch(registerError(err.message)))
  }
}
