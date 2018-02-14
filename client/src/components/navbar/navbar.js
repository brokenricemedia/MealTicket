import React from "react";
import { Menu, Icon } from 'antd';
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
        className="navbarnavbar"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="alipay">
        <a href="./" rel="noopener noreferrer"><Icon type="home"/>Home</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./about" rel="noopener noreferrer"><Icon type="team"/>About Us</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./contact" target="_blank" rel="noopener noreferrer"><Icon type="solution"/>Contact Us</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a className="logo" href="./" target="_blank" rel="noopener noreferrer">Meal Ticket</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"></a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./login" target="_blank" rel="noopener noreferrer"><Icon type="select"/>Sign In</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="./" target="_blank" rel="noopener noreferrer"><Icon type="heart-o"/>Register</a>
        </Menu.Item>
        
      </Menu>
    );
  }
}

export default NavBar