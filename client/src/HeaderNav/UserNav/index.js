import React from 'react';
import Logout from './Logout.js';
import { Menu, Icon } from 'antd';
import LoginRegisterModal from './LoginRegisterModal';

export default class UserNav extends React.Component{
    render(){
        // check if user login or not
        const userShow = this.props.hasLogined ?
            <Menu.Item key="logout">
                <Logout
                logout={this.props.logout}
                username={this.props.username}
                />
            </Menu.Item> :
            <Menu.Item key='register'>
                <Icon type='appstore' />Register/Login
            </Menu.Item>;
        return(
            <Menu mode="horizontal"
                  selectedKeys={[this.props.current]}
                  onClick={this.props.menuItemClick}>
                <Menu.Item key="course">
                   <Icon type="appstore"/>Courses
                </Menu.Item>
                <Menu.Item key="aboutUs">
                   <Icon type="appstore"/>About Us
                </Menu.Item>
                {userShow}
            </Menu>
        );
    }
}
