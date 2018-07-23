// return JWT from local storage
function getToken() {
  return localStorage.getItem('jwt');
}


export default getToken
