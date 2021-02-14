import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));
registerServiceWorker();
