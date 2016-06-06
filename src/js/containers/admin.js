/**
 * Created by liuyiru on 16/5/24.
 */
import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import {Row, Col, Breadcrumb} from 'antd';

import AdminLayout from './layouts/AdminLayout'


class Admin extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        const {dispatch} = this.props
    }

    render() {
        const {dispatch} = this.props
        return (
            <AdminLayout>
                基本信息
            </AdminLayout>
        )
    }
}

Admin.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {

    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
