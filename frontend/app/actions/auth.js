export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR';


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

function loginStart() {
  return {
    type: LOGIN_START
  }
}

function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

// REGISTER
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
          throw new Error('Error with registration. Please try again');
        }

        return res.json();
      })
      .then(({ message }) => {
        dispatch(registerSuccess(message));
        return { redirect: true };
      })
      .catch(err => dispatch(registerError(err.message)))
  }
}


// LOGIN
// Start the POST request to log in the user.
// Update state with user if successful or error message if not successful.
export function login(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: data })
  }

  return (dispatch) => {
    dispatch(loginStart());

    return fetch('/api/login', options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error with login');
        }

        return res.json();
      })
      .then(({ user }) => {
        dispatch(loginSuccess(user));
        return { redirect: true };
      })
      .catch(err => dispatch(loginError(err.message)))
  }
}
