/**
 * Created by liuyiru on 16/5/24.
 */
import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import {Row, Col} from 'antd';
import Header from '../components/header';
import Sider from '../components/sider';

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            <div className="main-wrapper">
                <Sider/>
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
        </div>
    );
};

AdminLayout.propTypes = {

};

export default AdminLayout;
