import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';
import BadgeExito from './components/BadgeExito';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('app');

ReactDOM.render(<BadgeExito />, container);