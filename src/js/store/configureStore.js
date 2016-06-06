import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import tasksReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
    ,createLogger()
)(createStore)

export function configureTasksStore(initialState) {
    const store = createStoreWithMiddleware(tasksReducer, initialState)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
