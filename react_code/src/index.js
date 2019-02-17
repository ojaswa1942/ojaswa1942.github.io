import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import 'tachyons';
import 'animate.css';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
unregister();
