/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Form,
  Input,
  Button,
  ColorPicker,
  DatePicker,
  Select,
  Upload,
} from "antd";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
// const { Option } = Select;

const preffixSelect = (
  <Form.Item noStyle>
    <Select
      style={{ width: 60 }}
      options={[
        {
          value: "value1",
          label: "value 1",
        },
        { value: "value2", label: "value 2" },
      ]}
    >
      {/* <Option value="91">+91</Option>
      <Option value="92">+92</Option> */}
    </Select>
  </Form.Item>
);

const handleSubmit = (values: any) => {
  console.log("values", values);
};

const failed = (err: any) => {
  console.log("failed", err);
};

const FormExample: React.FC = () => (
  <div className="App">
    <Form
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 5 }}
      onFinish={handleSubmit}
      onFinishFailed={failed}
    >
      <Form.Item
        required
        label="Username"
        tooltip="required"
        name="username"
        rules={[{ required: true, message: "Please enter name" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Enter Username" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        required
        rules={[{ required: true, message: "Please enter password" }]}
      >
        <Input.Password placeholder="Enter password" />
      </Form.Item>

      <Form.Item
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Input placeholder="I'm the content is being validated" />
      </Form.Item>

      <Form.Item label="Upload">
        <Upload listType="picture-card">
          <button type="button">
            <PlusOutlined />
            <div>Upload</div>
          </button>
        </Upload>
      </Form.Item>

      <Form.Item label="Select Color">
        <ColorPicker />
      </Form.Item>

      <Form.Item
        label="Range Picker"
        name="range"
        rules={[{ required: true, message: "Require to select date" }]}
      >
        <RangePicker />
      </Form.Item>

      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[{ required: true }]}
      >
        <Input addonBefore={preffixSelect} />
      </Form.Item>

      <Button htmlType="submit">Submit</Button>
    </Form>
  </div>
);

export default FormExample;
