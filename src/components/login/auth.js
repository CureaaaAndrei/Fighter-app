
import { useNavigate } from 'react-router-dom';
import { loginData } from './loginData';

export const login = (username, password) => {
  
    const user = loginData.find((user) => user.username === username && user.password === password);
    if (user) {
      return user
      //local storage sa returneze
    //   useNavigate('/Card')
    } else {
      return new Error('Invalid username or password');
    }
};
