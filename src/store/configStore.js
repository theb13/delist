import { createStore, combineReducers, applyMiddleware } from 'redux'
import devReducer from './reducers/devReducer'

//middlewares
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
const reducers = combineReducers(
    {
        devList: devReducer,
        form: formReducer,
        toastr: toastrReducer
    })

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)