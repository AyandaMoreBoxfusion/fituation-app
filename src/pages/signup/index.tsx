import { Button, Checkbox, Form, Input } from 'antd';
import Password from 'antd/lib/input/Password';
import React, { FC, useEffect, useState } from 'react';
import { useUser } from '../../providers/users';
import { INewUser } from '../../providers/users/context';
import styles from './styles.module.scss';
import {useRouter} from 'next/router';
import Nav from '../../components/Nav/Nav';
import Title from 'antd/lib/typography/Title';
import { HeartOutlined } from '@ant-design/icons';
import Link from 'next/link';

const SignUp: FC = () => {
    const { createUser, UserCreated } = useUser();
    const {push}=useRouter();

    useEffect(() => {
      if (UserCreated != null) {
        console.log('created-----------------',UserCreated);
        
      }
    }, [UserCreated])
    

    const onFinish = (values: INewUser) => {
      console.log(values);
      
      }
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      
      
  return (
    <>
    <Nav />
      <div className={styles.container}>
      <Title style={{margin: 10, paddingLeft: 170}}> join us <HeartOutlined /> </Title>
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
            <Input.Password required style={{border: 'none',
            boxSizing: 'border-box',
            borderBottom: '2px solid rgb(14, 13, 13)',
            backgroundColor: '#bcccc8'}}/>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
            <Link href="/login">
            <a style={{paddingLeft: 20}}>already registered?</a>
          </Link>
            
          </Form.Item>
        </Form>
      </div>
      </>
      );
}

export default SignUp