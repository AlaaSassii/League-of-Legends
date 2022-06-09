import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import { intialStore } from './Redux/store';
import { reducer } from './Redux/reducer';
import { createStore } from 'redux'; 
import SearchPlayer from './Pages/SearchPlayer';
import Champions from './Pages/Champions';
import Nothing from './Pages/Nothing';
import Loading from './Loading/Loading';
const store = createStore(reducer,intialStore) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

