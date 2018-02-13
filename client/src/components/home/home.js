import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import API from "../../utils/API";
import "./home.css";
import greekplatter from "../../images/greekplatter.jpg";

class Home extends React.Component {
      render() {
    return (
      <div className="Home"
      >
<h1>Welcome to Meal Ticket!</h1>

<img src={greekplatter} />
</div>
  	);
  }
}








export default Home;