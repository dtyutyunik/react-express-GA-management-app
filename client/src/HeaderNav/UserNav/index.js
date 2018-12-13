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

        let courseNavShow =
         <Menu.Item key="course">
             <Icon type="appstore"/>Courses
          </Menu.Item>
         let aboutUsNavShow =
          <Menu.Item key="aboutUs">
             <Icon type="appstore"/>About Us
          </Menu.Item>

        let isAdmin = this.props.portal === "admin";
        let isInstructor = this.props.portal === "instructor";
        courseNavShow = isAdmin || isInstructor ?  null : courseNavShow
        aboutUsNavShow = isAdmin || isInstructor ? null : aboutUsNavShow
        return(
            <Menu mode="horizontal"
                  selectedKeys={[this.props.current]}
                  onClick={this.props.menuItemClick}>
                {courseNavShow}
                {aboutUsNavShow}
                {userShow}
            </Menu>
        );
    }
}
