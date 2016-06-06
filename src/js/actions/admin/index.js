/**
 * Created by liuyiru on 16/6/3.
 */
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'

export const DATA_STORE = 'DATA_STORE'
export const MENU_KEY = 'MENU_KEY'//百科列表

export function setMenuKey(data) {
    return dispatch => {
        dispatch(datastore({"menuKey":data}))
    }
}

function datastore(data) {
    return {
        type: DATA_STORE,
        data: data
    }
}

