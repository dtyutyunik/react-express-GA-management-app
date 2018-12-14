import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  // submenu keys of first/top level
  rootSubmenuKeys = ['row1', 'row2', 'row3', 'row4'];
  state = {
    openKeys: ['row1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

    handleMenuItemClick = e => {
      switch (this.state.openKeys[1]) {
        case 'row1':
          this.props.handlePageChange('home');
          break;
        case 'row2':
          this.props.handlePageChange('course');
          break;
        case 'row3':
          this.props.handlePageChange('student');
          break;
        default:
          this.props.handlePageChange('home');
      }

  }

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 248 }}
      >
        <SubMenu key="row1" title={<span><Icon type="appstore" />
        <span>Home</span></span>}>
          <Menu.Item key="Home"
                     onClick={this.handleMenuItemClick}
          >Statistic</Menu.Item>
          <Menu.Item key="2">Revenue</Menu.Item>
        </SubMenu>
        <SubMenu key="row2" title={<span><Icon type="setting" />
        <span>Course Management</span></span>}>
          <Menu.Item key="5">Course List</Menu.Item>
          <Menu.Item key="6">Course Edit</Menu.Item>
        </SubMenu>
        <SubMenu key="row3" title={<span><Icon type="setting"/>
        <span>Student Management</span></span>}>
            <Menu.Item key="7">Student List</Menu.Item>
        </SubMenu>
        <SubMenu key="row4" title={<span><Icon type="setting" />
        <span>Instructor Management</span></span>}>
          <Menu.Item key="9">Instructor List</Menu.Item>
          <Menu.Item key="10">Edit Instructor</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
