import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../../providers/users/context';
import { useUser } from '../../providers/users';
import styles from './styles.module.scss';
import Nav from '../../components/Nav/Nav';
import Title from 'antd/lib/typography/Title';
import { HeartOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const login: FC = () => {
  const {push}=useRouter();
  const {loginUser, UserInfo, getUserInfo, getUserRole}=useUser();


  const onFinish = (values: IUser) => {
    if (loginUser){
      loginUser(values);
      getUserInfo(values);
      getUserRole(UserInfo?.userId)
      push('/redirection');
    } else { 
      alert("Please re-enter your values");
    }
    }
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <>
    <Nav />
      <div className={styles.container}>
    <Title style={{margin: 20, paddingLeft: 40}}>good to have you back <HeartOutlined /> </Title>
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
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type='email' required  />

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
            <Button type="primary" htmlType="submit" >
              Log In
            </Button>
          </Form.Item>
          <Link href="/signup">
          <a style={{paddingLeft: 70}}>not registered?</a>
          </Link>
        </Form>
      </div>
      </>
      );
}

export default login


