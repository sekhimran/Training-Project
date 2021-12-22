import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

// ** Import custom components for redux**
import { Provider } from 'react-redux';
import { store, persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
// import { adminReducer } from './store/reducer/admin';

// const rootReducer = combineReducers({
// 	admin: adminReducer,
//   });
  
//   const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
