import { createStore,applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'  //引入中间件

const store = new createStore(reducer,applyMiddleware( thunk ))

export default store;
