import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './modules/app/App';
import { createStore, Provider } from "./store";
import { defaultState, reducer } from "./modules/app/reducer";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer, defaultState);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
