//INFO: global app store with ReduxToolKit

import { configureStore, isPlain } from '@reduxjs/toolkit';
import { connectStore } from './navigation';

import { listenerMiddleware } from './redux_listener';
import reducer from './reducers';
const RootReducer= reducer;

//SEE: https://redux-toolkit.js.org/api/serializabilityMiddleware
const isSerializable = (value) => (value instanceof Date) || isPlain(value);

const store= configureStore({
	devTools: import.meta.env.NODE_ENV !== 'production',

	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false, //A: can't rehydrate, else { isSerializable } //A: no warning for date tipes 
	})
		.concat(listenerMiddleware.middleware), //A: actions executed by ReduxToolKit listenerMiddleware

	reducer: RootReducer,
	preloadedState: {
		language: 'es'
	 },
});

export default store;

setTimeout(() => {
	connectStore(store);
}, 0);
