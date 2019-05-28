import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// Import stylesheets like this, if you choose: import './public/stylesheets/base.scss';

serviceWorker.unregister();
