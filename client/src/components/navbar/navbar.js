import React from "react";
import { Menu, Icon } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom' 
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavBar extends React.Component {
  state = {
    current: 'alipay',
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
        <NavLink to="./" rel="noopener noreferrer"><Icon type="home"/>Home</NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./about" rel="noopener noreferrer"><Icon type="team"/>About Us</NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./contact"  rel="noopener noreferrer"><Icon type="solution"/>Contact Us</NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
        <NavLink to="./" className="logo" rel="noopener noreferrer">Meal Ticket</NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"></NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./login"  rel="noopener noreferrer"><Icon type="select"/>Sign In</NavLink>
        </Menu.Item>
        <Menu.Item key="alipay">
          <NavLink to="./"  rel="noopener noreferrer"><Icon type="heart-o"/>Register</NavLink>
        </Menu.Item>
        
      </Menu>
    );
  }
}

export default NavBar