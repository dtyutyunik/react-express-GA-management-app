import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';

class InstructorPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'user',
    }
  }

//   handleClick = (e) => {
//   console.log('click ', e);
//   this.setState({
//     current: e.key,
//   });
// }

  render() {
  const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const SubMenu = Menu.SubMenu;

    return (
      <div>
        <h1>Instructor Portal</h1>

      <nav className='instructorMenu'>
        <Menu
          onClick={onClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
          <Menu.Item key="user">
            <Icon type="user"/>My Profile
          </Menu.Item>

        <SubMenu title={<span className="subMenu"><Icon type="team" />My Courses</span>}>
            <Menu.Item key="team:1">Course Info</Menu.Item>
            <Menu.Item key="team:2">Student List</Menu.Item>
        </SubMenu>
        </Menu>
        </nav>
      </div>
    )
  }
}
export default InstructorPortal;
