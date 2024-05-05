import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

let serverReady: Promise<void>;
/**
 * Please prefer conditionally including a mocking file via bundler
 * during the build of your application.
 */
if (process.env.NODE_ENV === 'development') {

  serverReady = import('./Mocks/index').then(({startWorker})  => {
    return startWorker();
  })
} else {
  serverReady = Promise.resolve();
}

serverReady.then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
