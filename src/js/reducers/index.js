import { combineReducers } from 'redux'

/*import * as Demo from './demo'*/

import * as AdminIndex from './admin/index'

const rootReducer = combineReducers(Object.assign({}, /*Demo,*/ AdminIndex))
export default rootReducer
