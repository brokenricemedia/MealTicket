import React from "react";
import { Menu, Icon } from 'antd';
import "./navbar.css";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavBar extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="alipay">
          <a href="./" rel="noopener noreferrer">Home</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./about" rel="noopener noreferrer">About Us</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./contact" target="_blank" rel="noopener noreferrer">Contact Us</a>
        </Menu.Item>
        
      </Menu>
    );
  }
}

export default NavBar