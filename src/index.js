import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
const mountNode = document.querySelector(`#root`);

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>, 
    mountNode);