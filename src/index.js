import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './components/CardList';
import { robots } from './robots';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<CardList robots={robots} />,document.getElementById('root'));

reportWebVitals();