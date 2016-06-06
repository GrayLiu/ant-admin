/**
 * Created by liuyiru on 16/5/24.
 */
import React, { Component, PropTypes }  from 'react';
import {connect} from 'react-redux'
import { Menu, Icon, Badge } from 'antd';

import * as AdminindexAction from '../../actions/admin/index'

const SubMenu = Menu.SubMenu;

class Slider extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            current:'1'
        }
    }

    componentDidMount() {
        const {dispatch} = this.props
    }
    handleClick(e) {
        console.log('click ', e);
        const {dispatch} = this.props;
        this.setState({
            current: e.key
        });
        dispatch(AdminindexAction.setMenuKey(e.key,function () {
        }))
    }
    render() {
        const {menuKey} = this.props
        const openKey = menuKey.split('_')[0]
        return (
            <div className="side-wrapper">
                <Menu onClick={this.handleClick.bind(this)}
                      style={{ width: 240 }}
                      defaultOpenKeys={[openKey]}
                      selectedKeys={[menuKey]}
                      mode="inline">
                    <SubMenu key="home" title={<span><Icon type="home" /><span>系统概况</span></span>}>
                        <Menu.Item key="home_1"><a href="#">基本信息</a></Menu.Item>
                    </SubMenu>
                    <SubMenu key="page" title={<span><Icon type="file" /><span>文章管理</span></span>}>
                        <Menu.Item key="page_1"><a href="#/page/list">文章列表</a></Menu.Item>
                        <Menu.Item key="page_2"><a href="#/page/add">文章添加</a></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

Slider.propTypes = {

}

function mapStateToProps(state) {
    const {dataStore} = state
    const menuKey = dataStore.menuKey != null ? dataStore.menuKey : 'home_1'
    console.log("menuKey",menuKey)
    return {
        menuKey:menuKey
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
