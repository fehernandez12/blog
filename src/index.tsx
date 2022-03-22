import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap';
import './index.css';

import App from './App';
import { AuthService } from './services/auth.service';

const getToken = async () => {
  const api = await AuthService.authenticate(
    {
      username: 'deffeater',
      password: 'HxC090892'
    }
    );
  const result = await api.json();
  localStorage.setItem('blogToken', result.token);
}

getToken();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);