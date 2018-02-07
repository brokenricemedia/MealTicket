import React from "react";
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate, Input
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
  
        <FormItem {...formItemLayout} label="Menu Item">
          {getFieldDecorator('itemname', {
            rules: [{
              required: true,
              message: 'Please input your Menu Item',
            }],
          })(
            <Input placeholder="" />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Description">
          {getFieldDecorator('description', {
            rules: [{
              required: true,
              message: 'Please input your Menu Item Description',
            }],
          })(
            <Input placeholder="" />
          )}
        </FormItem>

        <FormItem
          label="Category"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('category', {
            rules: [{ required: true, message: 'Please select your category!' }],
          })(
            <Select
              placeholder="Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Option value="Baked Goods">Baked Goods</Option>
              <Option value="Desserts">Desserts</Option>
              <Option value="Ethnic Foods">Ethnic Foods</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Cost"
        >
          {getFieldDecorator('input-number', { initialValue: 0.00 })(
            <InputNumber min={1} max={500} />
          )}
          <span className="ant-form-text"> dollars</span>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Delivery?"
        >
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <Switch />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Upload an Image"
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload an image.
              </Button>
            </Upload>
          )}
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>


      </Form>
    );
  }
}

const WrappedDemo = Form.create()(Demo);

export default WrappedDemo;