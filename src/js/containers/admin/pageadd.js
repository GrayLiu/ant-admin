/**
 * Created by liuyiru on 16/6/3.
 */
import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import {Row, Col, Breadcrumb} from 'antd';

import AdminLayout from '../layouts/AdminLayout'

class PageAdd extends Component {
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
                文章编辑
            </AdminLayout>
        )
    }
}

PageAdd.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PageAdd)
