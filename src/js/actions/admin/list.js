/**
 * Created by liuyiru on 16/5/25.
 */
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'

//接口地址
const _request_api = 'http://hd.tongbu.com/ring/data/ring/'//正式接口

export const BAIKE_LIST = 'BAIKE_LIST'//百科列表
export const BAIKE_MODEL = 'BAIKE_MODEL'
export const BAIKE_DEL = 'BAIKE_DEL'

//获取来电铃声列表
export function fetchBaikeList(data,callback) {
    return dispatch => {

        const type = data.tabkey-1

        fetch('/data/ajax/list?type=' + type +'&time=' + (new Date()).getTime())
            .then(response => response.json())
            .then(json => {
                if(json != null) {
                    dispatch(baike_list(json))
                }
                typeof callback === 'function' && callback(json)
            })
    }
}
//更新百科列表
export function resetBaikeList(data) {
    return dispatch => {
        dispatch(baike_list({"Items":data}))
    }
}

//删除百科数据操作
export function deleteBaike(data,callback) {
    return dispatch => {
        const bid = data.id
        let bodydata = new FormData()
        bodydata.append('bid', bid)
        fetch('/data/ajax/del', { method: 'POST', body: bodydata })
            .then(response => response.json())
            .then(json => {
                typeof callback === 'function' && callback(json)
            })
    }
}

//显示编辑框
export function showModel(data) {
    return dispatch => {

        const visible = data.showModel
        const inputId = data.inputId
        const inputTitle = data.inputTitle
        const inputKeyword = data.inputKeyword
        const inputUrl = data.inputUrl
        const showData = {showModel:visible}

        if(inputId != undefined){
            showData.inputId = inputId
        }
        if(inputTitle != undefined){
            showData.inputTitle = inputTitle
        }
        if(inputKeyword != undefined){
            showData.inputKeyword = inputKeyword
        }
        if(inputUrl != undefined){
            showData.inputUrl = inputUrl
        }

        console.log(showData)
        dispatch(show_model(showData))
        //dispatch(show_model({showModel: showModel}))
    }
}

export function editBaike(data,callback) {
    return dispatch => {
        const bid = data.inputId
        const title = data.inputTitle
        const keyword = data.inputKeyword
        const url = data.inputUrl
        let bodydata = new FormData()
        bodydata.append('bid', bid)
        bodydata.append('title', title)
        bodydata.append('keyword', keyword)
        bodydata.append('url', url)
        fetch('/data/ajax/add', { method: 'POST', body: bodydata })
            .then(response => response.json())
            .then(json => {
                typeof callback === 'function' && callback(json)
            })
    }
}

function baike_list(data) {
    return {
        type: BAIKE_LIST,
        data: data
    }
}

function show_model(data) {
    return {
        type: BAIKE_MODEL,
        data: data
    }
}




