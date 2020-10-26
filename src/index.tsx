import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import configureStore from "./configureStore";
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter} from "react-router-dom";
import {IntlProvider} from 'react-intl';
import en from './localizations/en.json';

const store = configureStore({});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* No need to configure */}
      <IntlProvider locale={'en'} messages={en}>
        <HelmetProvider>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </HelmetProvider>
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
