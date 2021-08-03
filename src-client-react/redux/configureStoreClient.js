import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import serverConfigurateStore from './configureStore'
import { composeWithDevTools } from 'redux-devtools-extension';

import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const routerReducer = { router: connectRouter(history) }
  return serverConfigurateStore(preloadedState, routerReducer, composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      //want saga: replace it here?
      thunkMiddleware
    )
  ))
}
