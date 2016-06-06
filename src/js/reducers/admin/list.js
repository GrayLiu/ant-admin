/**
 * Created by liuyiru on 16/5/25.
 */
import { combineReducers } from 'redux'

import {
    BAIKE_LIST,
    BAIKE_MODEL,
    BAIKE_DEL
} from '../../actions/admin/list'

//百科列表信息
export function baikeStore(state = {}, action) {
    switch(action.type) {
        case BAIKE_LIST:
            return Object.assign({}, state, action.data)
        case BAIKE_DEL:
            return Object.assign({}, state, {delres:action.data.res})
        default:
            return state
    }
}

export function showModelStore(state = {}, action) {
    switch(action.type) {
        case BAIKE_MODEL:
            return Object.assign({}, state, action.data)
        default:
            return state
    }
}