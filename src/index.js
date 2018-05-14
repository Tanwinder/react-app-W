import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'; // 1. create store
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import allreducers from './reducers/allreducers';

const allStoreEnhancers = compose(applyMiddleware(thunk),
window.devToolsExtension && window.devToolsExtension()
);

// step 1st create store
const store= createStore(allreducers,
    {},
    allStoreEnhancers
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
