import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers';
import { thunk } from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />

      </Router>
    </Provider>
  </React.StrictMode>
);


