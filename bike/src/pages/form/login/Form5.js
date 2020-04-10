import React, { useState, useEffect, useRef } from 'react'
import { Form, Input, InputNumber, Modal, Card, Button, Avatar, Typography } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { layout, tailLayout } from './sty';
import './style.scss'

export default function Form5 () {
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = values => {
    console.log('Finish:', values);
  };
  return (
    <>
      <Card title="多表单联动+模态框" className="card-wrap">
        <Form.Provider
          onFormFinish={(name, { values, forms }) => {
            if (name === 'userForm') {
              const { basicForm } = forms;
              const users = basicForm.getFieldValue('users') || [];
              basicForm.setFieldsValue({
                users: [...users, values],
              });
              setVisible(false);
            }
          }}
        >
          <Form {...layout} name="basicForm" onFinish={onFinish}>
            <Form.Item
              name="group"
              label="Group Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="User List"
              shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
            >
              {({ getFieldValue }) => {
                const users = getFieldValue('users') || [];
                return users.length ? (
                  <ul>
                    {users.map((user, index) => (
                      <li key={index} className="user">
                        <Avatar icon={<UserOutlined />} />
                        {user.name} - {user.age}
                      </li>
                    ))}
                  </ul>
                ) : (
                    <Typography.Text className="ant-form-text" type="secondary">
                      ( <SmileOutlined /> No user yet. )
                    </Typography.Text>
                  );
              }}
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button htmlType="submit" type="primary">
                Submit
            </Button>
              <Button
                htmlType="button"
                style={{
                  margin: '0 8px',
                }}
                onClick={showUserModal}
              >
                Add User
            </Button>
            </Form.Item>
          </Form>

          <ModalForm visible={visible} onCancel={hideUserModal} />
        </Form.Provider>
      </Card>
    </>
  )
}


// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal title="Basic Drawer" visible={visible} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="name"
          label="User Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="User Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};