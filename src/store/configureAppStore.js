import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [routerMiddleware(history), ...getDefaultMiddleware()],
    preloadedState
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
