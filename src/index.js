/*===============================
=            Imports            =
===============================*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/search_bar';
import reducers from './reducers';
/*=====  End of Imports  ======*/


/*=================================
=            constants            =
=================================*/
const API_KEY = 'AIzaSyCJnvgg8h0B047qefXV8znhT4orbrzBvso';

const createStoreWithMiddleware = applyMiddleware()(createStore);

/*=====  End of constants  ======*/

/* initialize app */
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#react-video-app'));
