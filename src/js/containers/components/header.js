/**
 * Created by liuyiru on 16/5/24.
 */
import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import {Row, Col} from 'antd';
const Header = () => {
    return (
        <header>
            <Row>
                <Col span={24}>Header</Col>
            </Row>
        </header>
    );
};

Header.propTypes = {

};

export default Header;
