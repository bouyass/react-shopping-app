import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialValue = {}
export default createStore(rootReducer, initialValue, applyMiddleware(thunk))
