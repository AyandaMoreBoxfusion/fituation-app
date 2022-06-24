import React, { FC, useEffect } from 'react'
import styles from '../adminProfile/styles.module.scss'
import Title from 'antd/lib/typography/Title'
import { Button, Form, Input } from 'antd'
import { useUser } from '../../providers/users'
import Admin from '../admin'
import { PlusCircleOutlined } from '@ant-design/icons'

const AdminProfile: FC = () => {
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
    <Admin>
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
      <Button style={{width: 500, height: 80, marginLeft: 200, borderRadius: 15, marginTop: 15 }} icon={<PlusCircleOutlined />}>Add New Admin
      </Button>
    </Admin>
    </>
  )
}

export default AdminProfile
