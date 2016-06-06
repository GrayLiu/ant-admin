/**
 * Created by liuyiru on 16/5/27.
 */
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'

export const BAIKE_MODEL = 'BAIKE_MODEL'

//数据
export function inputValue(data) {
    return dispatch => {
        if(data.inputTitle) {
            const inputTitle = data.inputTitle
            dispatch(show_model({inputTitle: inputTitle}))
        }else if(data.inputKeyword) {
            const inputKeyword = data.inputKeyword
            dispatch(show_model({inputKeyword: inputKeyword}))
        }else if(data.inputUrl) {
            const inputUrl = data.inputUrl
            dispatch(show_model({inputUrl: inputUrl}))
        }
    }
}

function show_model(data) {
    return {
        type: BAIKE_MODEL,
        data: data
    }
}