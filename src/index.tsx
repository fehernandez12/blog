import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap';
import './index.css';

import App from './App';
import { AuthService } from './services/auth.service';
import { Error } from './utils/alertUtils';

const getToken = async () => {
  localStorage.setItem('blogUsername', 'deffeater');
  localStorage.setItem('blogPassword', 'HxC090892');
  try {
    if (!localStorage.getItem('blogToken')) {
      const api = await AuthService.authenticate(
        {
          username: 'deffeater',
          password: 'HxC090892'
        }
      );
      const result = await api!.json();
      localStorage.setItem('blogToken', result.token);
    }
  } catch (error) {
    throw error;
    //Error.fire({text: `Ocurrió un error al obtener el token inicial: ${error}`})
  }
}

getToken();

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);