import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from 'App';
import {store} from 'store/store';
import reportWebVitals from 'reportWebVitals';
import 'react-tippy/dist/tippy.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-toastify/dist/ReactToastify.css';
import 'index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
