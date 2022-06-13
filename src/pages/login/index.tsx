import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../../providers/users/context';
import { useUser } from '../../providers/users';
import styles from './styles.module.scss';

const login: FC = () => {
  const {push}=useRouter();
  const {UserLogin,loginUser}=useUser();

  useEffect(() => {
    if (UserLogin != null) {
      console.log(UserLogin);
    }
  }, [UserLogin])

  const onFinish = (values: IUser) => {
    console.log(values);
    if (loginUser){
      loginUser(values);
       push('/user')
    } else { 
      alert("Please re-enter your values");
    }
    }
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      
      
  return (
      <div className={styles.container}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
         
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
              
          <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      );
}

export default login


