import { Button, Checkbox, Form, Input } from 'antd';
import Password from 'antd/lib/input/Password';
import React, { FC, useEffect, useState } from 'react';
import { useUser } from '../../providers/users';
import { INewUser } from '../../providers/users/context';
import styles from './styles.module.scss';
import {useRouter} from 'next/router';

const SignUp: FC = () => {
    const { createUser, UserCreated } = useUser();
    const {push}=useRouter();

    useEffect(() => {
      if (UserCreated != null) {
        console.log(UserCreated);
      }
    }, [UserCreated])

    const onFinish = (values: INewUser) => {
      console.log(values);
      if (createUser){
        createUser(values);
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
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
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

export default SignUp