import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import App from './App';

library.add(faSearch);

ReactDOM.render(<App />, document.getElementById('root'));
