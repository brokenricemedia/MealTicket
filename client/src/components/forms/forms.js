import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'styles/index.css'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

ReactDOM.render(<WrappedNormalLoginForm />, mountNode);

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}





// import React from 'react';
// import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
// const FormItem = Form.Item;
// const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;

// const residences = [{
//   value: 'zhejiang',
//   label: 'Zhejiang',
//   children: [{
//     value: 'hangzhou',
//     label: 'Hangzhou',
//     children: [{
//       value: 'xihu',
//       label: 'West Lake',
//     }],
//   }],
// }, {
//   value: 'jiangsu',
//   label: 'Jiangsu',
//   children: [{
//     value: 'nanjing',
//     label: 'Nanjing',
//     children: [{
//       value: 'zhonghuamen',
//       label: 'Zhong Hua Men',
//     }],
//   }],
// }];

// class RegistrationForm extends React.Component {
//   state = {
//     confirmDirty: false,
//     autoCompleteResult: [],
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFieldsAndScroll((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   }
//   handleConfirmBlur = (e) => {
//     const value = e.target.value;
//     this.setState({ confirmDirty: this.state.confirmDirty || !!value });
//   }
//   checkPassword = (rule, value, callback) => {
//     const form = this.props.form;
//     if (value && value !== form.getFieldValue('password')) {
//       callback('Two passwords that you enter is inconsistent!');
//     } else {
//       callback();
//     }
//   }
//   checkConfirm = (rule, value, callback) => {
//     const form = this.props.form;
//     if (value && this.state.confirmDirty) {
//       form.validateFields(['confirm'], { force: true });
//     }
//     callback();
//   }

//   handleWebsiteChange = (value) => {
//     let autoCompleteResult;
//     if (!value) {
//       autoCompleteResult = [];
//     } else {
//       autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
//     }
//     this.setState({ autoCompleteResult });
//   }

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const { autoCompleteResult } = this.state;

//     const formItemLayout = {
//       labelCol: {
//         xs: { span: 24 },
//         sm: { span: 8 },
//       },
//       wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 16 },
//       },
//     };
//     const tailFormItemLayout = {
//       wrapperCol: {
//         xs: {
//           span: 24,
//           offset: 0,
//         },
//         sm: {
//           span: 16,
//           offset: 8,
//         },
//       },
//     };
//     const prefixSelector = getFieldDecorator('prefix', {
//       initialValue: '86',
//     })(
//       <Select style={{ width: 70 }}>
//         <Option value="86"></Option>
//         <Option value="87"></Option>
//       </Select>
//     );

//     const websiteOptions = autoCompleteResult.map(website => (
//       <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
//     ));

//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <FormItem
//           {...formItemLayout}
//           label="E-mail"
//         >
//           {getFieldDecorator('email', {
//             rules: [{
//               type: 'email', message: 'The input is not valid E-mail!',
//             }, {
//               required: true, message: 'Please input your E-mail!',
//             }],
//           })(
//             <Input />
//           )}
//         </FormItem>
//         <FormItem
//           {...formItemLayout}
//           label="Password"
//         >
//           {getFieldDecorator('password', {
//             rules: [{
//               required: true, message: 'Please input your password!',
//             }, {
//               validator: this.checkConfirm,
//             }],
//           })(
//             <Input type="password" />
//           )}
//         </FormItem>
//         <FormItem
//           {...formItemLayout}
//           label="Confirm Password"
//         >
//           {getFieldDecorator('confirm', {
//             rules: [{
//               required: true, message: 'Please confirm your password!',
//             }, {
//               validator: this.checkPassword,
//             }],
//           })(
//             <Input type="password" onBlur={this.handleConfirmBlur} />
//           )}
//         </FormItem>
//         <FormItem
//           {...formItemLayout}
//           label={(
//             <span>
//               Nickname&nbsp;
//               <Tooltip title="What do you want others to call you?">
//                 <Icon type="question-circle-o" />
//               </Tooltip>
//             </span>
//           )}
//         >
//           {getFieldDecorator('nickname', {
//             rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
//           })(
//             <Input />
//           )}
//         </FormItem>
//         <FormItem
//           {...formItemLayout}
//           label="Habitual Residence"
//         >
//           {getFieldDecorator('residence', {
//             initialValue: ['zhejiang', 'hangzhou', 'xihu'],
//             rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
//           })(
//             <Cascader options={residences} />
//           )}
//         </FormItem>
//         <FormItem
//           {...formItemLayout}
//           label="Phone Number"
//         >
//           {getFieldDecorator('phone', {
//             rules: [{ required: true, message: 'Please input your phone number!' }],
//           })(
//             <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
//           )}
//         </FormItem>
//         <FormItem
//           {...formItemLayout}
//           label="Website"
//         >
//           {getFieldDecorator('website', {
//             rules: [{ required: true, message: 'Please input website!' }],
//           })(
//             <AutoComplete
//               dataSource={websiteOptions}
//               onChange={this.handleWebsiteChange}
//               placeholder="website"
//             >
//               <Input />
//             </AutoComplete>
//           )}
//         </FormItem>
//         <FormItem
//           {...formItemLayout}
//           label="Captcha"
//           extra="We must make sure that your are a human."
//         >
//           <Row gutter={8}>
//             <Col span={12}>
//               {getFieldDecorator('captcha', {
//                 rules: [{ required: true, message: 'Please input the captcha you got!' }],
//               })(
//                 <Input />
//               )}
//             </Col>
//             <Col span={12}>
//               <Button>Get captcha</Button>
//             </Col>
//           </Row>
//         </FormItem>
//         <FormItem {...tailFormItemLayout}>
//           {getFieldDecorator('agreement', {
//             valuePropName: 'checked',
//           })(
//             <Checkbox>I have read the <a href="">agreement</a></Checkbox>
//           )}
//         </FormItem>
//         <FormItem {...tailFormItemLayout}>
//           <Button type="primary" htmlType="submit">Register</Button>
//         </FormItem>
//       </Form>
//     );
//   }
// }

//  const WrappedRegistrationForm = Form.create()(RegistrationForm);

//  export default WrappedRegistrationForm
