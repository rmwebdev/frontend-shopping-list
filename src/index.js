import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux
import { Provider } from "react-redux";
import store from './store';
// ReactDOM.render(

// <App />, 
// document.getElementById('root'));
// reportWebVitals();


ReactDOM.render(
    // <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>,
    // </React.StrictMode>,
    document.getElementById("root")
  );
  
reportWebVitals();
