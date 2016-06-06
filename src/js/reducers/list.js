import { combineReducers } from 'redux'

import {
	RING_LIST,
	RING_TAB
} from '../actions/list'

//铃声列表信息
export function ringStore(state = {}, action) {
	switch(action.type) {
		case RING_LIST:  
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}
//菜单tab
export function tabStore(state = {}, action) { 
	switch(action.type) {
		case RING_TAB:
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}

