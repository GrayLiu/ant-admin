/**
 * Created by liuyiru on 16/6/3.
 */

import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import {Row, Col, Breadcrumb, Table, Icon, Popconfirm, message, Select, Input} from 'antd';

import AdminLayout from '../layouts/AdminLayout'
const Option = Select.Option;

class PageList extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            filteredInfo: null,
            sortedInfo: null,
            options: [],
            titleSelect:'',
        }
    }

    componentDidMount() {
        const {dispatch} = this.props
    }
    _confirm() {
        message.success('点击了确定');
    }

    _cancel() {
        message.error('点击了取消');
    }
    _handleTitleSelectChange(e){
        this.state.titleSelect = e.target.value
        console.log(this.state.titleSelect)
    }
    render() {
        const {dispatch} = this.props
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [ {
            title: '序号',
            dataIndex: 'id',
        }, {
            title: '标题',
            dataIndex: 'title',
            key:'title',
            filters: [
                {
                    text: '2',
                    value: '2'
                }
            ],
            filteredValue: filteredInfo.title,
            onFilter(value, record){
                console.log('inputvalue',value)
                record.title.indexOf(value) > 0
            },
            render(text) {
                return <a href="#">{text}</a>;
            },
        }, {
            title: '发布时间',
            dataIndex: 'time',
        }, {
            title: '操作',
            key: 'operation',
            render: (text, record) => (
                <span>
                    <a href="#">编辑{record.name}</a>
                    <span className="ant-divider"></span>
                    <Popconfirm title="确定要删除这篇文章吗？" onConfirm={this._confirm.bind(this)} onCancel={this._cancel.bind(this)}>
                        <a href="#">删除</a>
                    </Popconfirm>
                </span>
            ),
        }
        ];
        const data = [];
        for (let i = 1; i < 46; i++) {
            data.push({
                key: i,
                id:i,
                title: `文章标题${i}`,
                url: `文章链接${i}`,
                time: (new Date()).toLocaleString()
            });
        }

        const pagination = {
            total: data.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange(current) {
                console.log('Current: ', current);
            }
        }
        return (
            <AdminLayout>
                <div className="mod-breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>文章管理</Breadcrumb.Item>
                        <Breadcrumb.Item href="">文章列表</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Table columns={columns} dataSource={data} pagination={pagination} />
            </AdminLayout>
        )
    }
}

PageList.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PageList)

