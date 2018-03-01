import http from './http';

const loginEndpoint = '/rest-auth/login/';
const logoutEndpoint = '/rest-auth/logout/';

const login = (username, password, successFunc, errorFunc) => {
  http.post(loginEndpoint, {
    username,
    password
  }).then(response => {
    const { token, user } = response;
    if (token) {
      http.setHeaderToken(token);
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(user));
      if (successFunc) successFunc(response);
    }
  }).catch(err => {
    if (errorFunc) errorFunc(err);
  });
};

const logout = (successFunc, errorFunc) => {
  http.post(logoutEndpoint).then(response => {
    http.setHeaderToken(null); // clear token
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    if (successFunc) successFunc(response);
  }).catch(err => {
    if (errorFunc) errorFunc(err);
  });
};

const isUserLoggedIn = () => {
  return (sessionStorage.token != null);
};

export default {
  login,
  logout,
  isUserLoggedIn
};
