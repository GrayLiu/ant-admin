/**
 * Created by liuyiru on 16/5/24.
 */
import React, { Component, PropTypes }  from 'react';
import {connect} from 'react-redux'
import { Table, Icon, Breadcrumb, Button, Modal, Alert, message, Upload } from 'antd';
import Editbaike from '../common/editbaike'
import * as ListAction from '../../actions/admin/list'

const confirm = Modal.confirm;

class List extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        var that = this
        const {dispatch,baikelist} = this.props
        let tabkey = 1;
         dispatch(ListAction.fetchBaikeList({tabkey: tabkey}, function(){
             that.setState({
                key: 'call'
             })
         }));
    }
    _showModal() {
        const {dispatch,visible} = this.props;
        const modelData = {
            showModel:true,
            inputId:0,
            inputTitle:'',
            inputKeyword:'',
            inputUrl: ''
        }
        dispatch(ListAction.showModel(modelData,function () {
        }))

    }
    _updateBaike(text, record, index){
        const {dispatch,visible} = this.props;
        const modelData = {
            showModel:true,
            inputId:record.id,
            inputTitle:record.title,
            inputKeyword:record.word,
            inputUrl: record.link
        }
        dispatch(ListAction.showModel(modelData,function () {
        }))
    }
    _showDeleteConfirm(text, record, index) {
        const {dispatch,baikelist,delres} = this.props
        confirm({
            title: '您是否确认要删除这条监控',
            content: record.title,
            onOk() {
                dispatch(ListAction.deleteBaike({id: record.id}, function(result){
                    if(result.res==1) {
                        message.success('词条删除成功');
                        baikelist.splice(index, 1)

                        const newlist = []
                        for(let i = 0;i<baikelist.length;i++){
                            newlist[i] = baikelist[i]
                        }
                        dispatch(ListAction.resetBaikeList(newlist,function () {
                        }))
                    }else{
                        message.error('词条删除失败请稍后再试~');
                    }
                }));
            },
            onCancel() {},
        });
    }
    render() {
        const {dispatch, baikelist} = this.props
        const columns = [{title: '编号', dataIndex: 'noid', key: 'noid',width:'50'},
            {title: '导入时间', dataIndex: 'inserttime', key: 'inserttime'},
            {title: '标题', dataIndex: 'title', key: 'title', render: (text,record) => <a target="_blank" href={record.link}>{text}</a>},
            {title: '关键字', dataIndex: 'word', key: 'word'},
            {title: '状态', dataIndex: 'status', key: 'status'},
            {title: '链接', dataIndex: 'link', key: 'link', render: (text) => <a target="_blank" href={text}>{text}</a>},
            {title: '更新时间', dataIndex: 'updatetime', key: 'updatetime'},
            {title: '次数', dataIndex: 'times', key: 'times'},
            {title: '操作', dataIndex: '', key: '',width: '50', render: (text, record, index) => <div><a onClick={this._updateBaike.bind(this,text, record, index)}>更新</a><br/><a onClick={this._showDeleteConfirm.bind(this,text, record, index)}>删除</a></div> }
        ];
        const pagination = {
            total: baikelist.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange(current) {
                console.log('Current: ', current);
            },
        };
        const props = {
            name: 'file',
            action: '/data/ajax/upload',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    if(info.file.response.res==1) {
                        message.success(`${info.file.name} 上传成功。`);
                    }else{
                        message.error(`${info.file.name} ${info.file.response.msg}`);
                    }
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 上传失败。`);
                }
            },
        };
        return (
            <div>
                <div className="mod-btn">
                    <Button type="primary" onClick={this._showModal.bind(this)}>添加监控</Button>
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload" /> 批量上传
                        </Button>
                    </Upload>
                </div>
                <Table dataSource={baikelist} columns={columns} pagination={pagination}/>
                <Editbaike/>
            </div>
        );
    }
}

List.propTypes = {
    dispatch: PropTypes.func.isRequired,
    baikelist: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    const {baikeStore,showModelStore} = state
    const baikelist = baikeStore.Items != null ? baikeStore.Items : []
    const delres = baikeStore.delres != null ? baikeStore.delres : 0
    console.log("delres:"+delres)
    return {
        baikelist:baikelist,
        delres:delres
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
