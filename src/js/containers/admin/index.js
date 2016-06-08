/**
 * Created by liuyiru on 16/6/2.
 */
import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import {Row, Col, Breadcrumb} from 'antd';

import AdminLayout from '../layouts/AdminLayout'
import ChartTemp from '../components/chartTemp'
import ChartPie from '../components/chartPie'
import ChartLine from '../components/chartLine'
import * as AdminindexAction from '../../actions/admin/index'

class Index extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        const {dispatch} = this.props
    }

    render() {
        const {dispatch} = this.props
        const {children} = 'aaa'
        return (
            <AdminLayout children={children}>
                <div className="mod-breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>系统概况</Breadcrumb.Item>
                        <Breadcrumb.Item href="">基本信息</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <ChartLine/>
                <Row>
                    <Col span="12">
                        <ChartPie/>
                    </Col>
                    <Col span="12">
                        <ChartTemp/>
                    </Col>
                </Row>
            </AdminLayout>
        )
    }
}

Index.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {

    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
