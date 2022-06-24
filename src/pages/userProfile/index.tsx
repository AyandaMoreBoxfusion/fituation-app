import React, { FC, useEffect } from 'react'
import User from '../user'
import styles from '../userProfile/styles.module.scss'
import Title from 'antd/lib/typography/Title'
import { Button, Form, Input } from 'antd'
import { useUser } from '../../providers/users'

const Profile: FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    const {UserInfo} = useUser();

    useEffect(() => {
      console.log('profile', UserInfo);
    }, [])
  return (
    <>
    <User>
      <div className={styles.container}>
        <Title>Profile</Title>
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
          >
            <Input defaultValue={UserInfo?.name} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
          >
            <Input defaultValue={UserInfo?.email} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
          </Form.Item>
        </Form>
      </div>
    </User>
    </>
  )
}

export default Profile
