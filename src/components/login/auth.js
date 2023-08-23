import { loginData } from './loginData';

export const login = (username, password) => {
  const user = loginData.find((user) => user.username === username && user.password === password);
  if (user) {
    // Salvează informațiile de autentificare în localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    return user;
  } else {
    throw new Error('Invalid username or password'); // Aruncăm o excepție în cazul unei erori
  }
};

