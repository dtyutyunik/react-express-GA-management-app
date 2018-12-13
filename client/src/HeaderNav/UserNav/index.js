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
                <Icon type='user' />Register/Login
            </Menu.Item>;

        let courseNavShow =
         <Menu.Item key="course">
             <Icon type="heart"/>Courses
          </Menu.Item>
        let aboutUsNavShow =
          <Menu.Item key="aboutUs">
             <Icon type="home"/>About Us
          </Menu.Item>
        const adminNavShow =
          <Menu.Item key="adminNav">
            Welcome to Bootcamp Admin
          </Menu.Item>
        const instructorNavShow =
          <Menu.Item key="insNav">
          Welcome to Bootcamp Instructor
          </Menu.Item>
        let isAdmin = this.props.portal === "admin";
        let isInstructor = this.props.portal === "instructor";
        switch (true) {
          case isAdmin:
            courseNavShow = adminNavShow
            break;
          case isInstructor:
            courseNavShow = instructorNavShow
            break;
          default:
        }
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
