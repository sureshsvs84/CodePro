import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/reduxStore';
import "@babel/polyfill";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
                        <App />
                    </Provider></BrowserRouter>,
                     document.getElementById('root'));
                registerServiceWorker();
