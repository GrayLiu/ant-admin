/**
 * Created by liuyiru on 16/6/3.
 */

import { combineReducers } from 'redux'

import {
    DATA_STORE
} from '../../actions/admin/index'

export function dataStore(state = {}, action) {
    switch(action.type) {
        case DATA_STORE:
            return Object.assign({}, state, action.data)
        default:
            return state
    }
}