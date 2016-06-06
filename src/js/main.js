import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {configureTasksStore} from './store/configureStore'

import '../../../node_modules/antd/dist/antd.less';
import '../css/main.scss'

import Index from './containers/admin/index'   //后台管理首页
import PageList from './containers/admin/pagelist' //文章列表
import PageAdd from './containers/admin/pageadd'
//路由控制
import { Router, Route, Link } from 'react-router'

const store = configureTasksStore()
render (
    <Provider store={store}>
        <Router>
            <Route path="/" component={Index} />
            <Route path="/page/list" component={PageList} />
            <Route path="/page/add" component={PageAdd} />
        </Router>
    </Provider>,
    document.getElementById('main')
)

//初始化屏幕比例
function screenRatio() {
    var ratio = 1;
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
        // Only allow for values > 1
        ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
    }
    else if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    }

    var scale = document.createElement('meta');
    var scaleRatio = 1 / ratio;
    scale.name = 'viewport';
    scale.content = 'initial-scale=' + scaleRatio + ', maximum-scale=' + scaleRatio + ', minimum-scale=' + scaleRatio + ', user-scalable=no';
    var s = document.getElementsByTagName('title')[0];
    s.parentNode.insertBefore(scale, s);
}
screenRatio()