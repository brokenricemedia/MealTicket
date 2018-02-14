import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './forms.css';
import API from "../../utils/userAPI";
import {Redirect} from 'react-router-dom';
// import './components/home/home.css';import API from "../../utils/API";
// import './components/about/about.css';import API from "../../utils/API";
// import './components/contact/contact.css';import API from "../../utils/API"

;const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    redirect: false
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const { confirm, ...newUser } = values;
      if (!err) {
        console.log('Received values of form: ', newUser);
        API.saveUser(newUser)
          .then(response => {
            console.log(response)
            this.setState({redirect: true})
          })
          .catch(err => {
            console.log(err.message);
          });
      }

    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    if (this.state.redirect){
      return <Redirect to="/home" />
    } else {
    return (
      <div className="Container loginContainer">
        <div className="row">
        <div className="col-md-offset-3 col-md-9">
      <Form className="glitter" onSubmit={this.handleSubmit}>
      
              <FormItem
          {...formItemLayout}
          label=""
        >
          {getFieldDecorator('firstname', {
            rules: [{
              type: 'string', message: 'Please enter your first name',
            }, {
              required: true, message: 'First name is required',
            }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First Name" />
          )}
        </FormItem>
          <FormItem
          {...formItemLayout}
          label=""
        >
          {getFieldDecorator('lastname', {
            rules: [{
              type: 'string', message: 'Please enter your last name',
            }, {
              required: true, message: 'Last name is required',
            }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label=""
        >
          {getFieldDecorator('username', {
            rules: [{
              type: 'string', message: 'Please enter your user name',
            }, {
              required: true, message: 'User name is required',
            }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label=""
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Mail"/>
          )}
        </FormItem>        
        <FormItem
          {...formItemLayout}
          label=""
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label=""
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem {...formItemLayout}>
          <Button className= "register" type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
      </div>
        </div>
      </div>
    )};
  }
}

 const WrappedRegistrationForm = Form.create()(RegistrationForm);

 export default WrappedRegistrationForm
