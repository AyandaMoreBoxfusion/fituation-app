import Title from 'antd/lib/typography/Title';
import React, { FC, useEffect, useState } from 'react'
import Link  from 'next/link';
import styles from './styles.module.scss'
import User from '../user';
import { useUser } from '../../providers/users';
import { useExercises } from '../../providers/exercise';
import Admin from '../admin';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';

const { Option } = Select;

const AdminDashboard: FC = () => {

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [location, setLocation] = useState('');
   const [bodyTarget, setBodyTarget] = useState('');
   const [intensity, setIntensity] = useState('');
   const [calorieBurn, setCalorieBurn] = useState(0);
   const [link, setLink] = useState('');

   const {createExercise } = useExercises();
  

   const getName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
 }

 const getLink = (e: { target: { value: React.SetStateAction<string>; }; }) => {
  setLink(e.target.value);
}

const getCalorieBurn = (e:React.ChangeEvent<HTMLInputElement> ) => {
  setCalorieBurn(Number(e.target.value));
}

const getDescription = (e: { target: { value: React.SetStateAction<string>; }; }) => {
  setDescription(e.target.value);
}

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const getExercise = () => {

    let Exercise = 
    { name: name,
      description: description,
      location: Number(location),
      bodyTarget: Number(bodyTarget),
      intensity: Number(intensity),
      calorieBurn: calorieBurn,
      link: link
    }

    console.log(Exercise);
    createExercise(Exercise);
 }

    const {UserCreated, UserInfo}=useUser();
    useEffect(() => {
      
        if (UserInfo != null) {
          console.log(UserInfo);
        }
      }, [UserInfo])
      
      const userDetails = UserInfo != null ? UserInfo : UserCreated;
  return (
      <>
      <Admin>
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Title> Hello, {userDetails?.name} ! There's: </Title>
              <div className={styles.statsContainer}>
              <div className={styles.stats}>
        <img className={styles.pic} src="https://img.icons8.com/external-becris-lineal-color-becris/344/external-calories-ketogenic-diet-becris-lineal-color-becris.png" />
          <Title level={4}>0 Total Videos</Title>
        </div>

        <div className={styles.stats}>
          <img className={styles.pic} src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-exercise-working-stress-flaticons-flat-flat-icons-2.png" />
        <Title level={4}>0 Watched Workout Videos</Title>
        </div>

        <div className={styles.stats}>
          <img className={styles.pic} src="https://img.icons8.com/bubbles/344/user-group-woman-woman.png" />
        <Title level={4}>0 Total Users</Title>
        </div>
      </div>
      
            </div>
            <Button style={{width: 500, height: 80, marginLeft: 200, borderRadius: 15 }} onClick={showDrawer} icon={<PlusOutlined />}>
        Add a new workout video
      </Button>

      <Drawer
        title="Add a new workout video"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={getExercise} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Title"
                rules={[{ required: true, message: 'Please enter the title of the video' }]}
              >
                <Input placeholder="Please enter the title of the video" value={name} onChange={getName} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="link"
                label="Link"
                rules={[{ required: true, message: 'Please enter url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="https://www.youtube.com/"
                  addonAfter=".com"
                  placeholder=""
                  value={link}
                  onChange={getLink}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="location"
                label="Type"
                rules={[{ required: true, message: 'Please select the type of workout' }]}
              >
                <Select placeholder='Please select the type of workout' value={location} onSelect={(value: React.SetStateAction<string>) => setLocation(value)}>
                  <Option value={1}>Home Workout</Option>
                  <Option value={2}>Gym Workout</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="bodyTarget"
                label="Body Target"
                rules={[{ required: true, message: 'Please choose the Body Target' }]}
              >
                <Select placeholder='Please choose the body target' value={bodyTarget} onSelect={(value: React.SetStateAction<string>) => setBodyTarget(value)}>
                <Option value={1}>Full Body</Option>
                  <Option value={2}>Abs</Option>
                  <Option value={3}>Glutes</Option>
                  <Option value={4}>Legs</Option>
                  <Option value={5}>Upper Body</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="intensity"
                label="Intensity"
                rules={[{ required: true, message: 'Please Indicate The Intensity' }]}
              >
                <Select placeholder='Please Indicate The Intensity' value={intensity} onSelect={(value: React.SetStateAction<string>) => setIntensity(value)}>
                <Option value={1}>Beginner</Option>
                  <Option value={2}>Advanced</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="calorieBurn"
                label="Estimated Calorie Burn"
                rules={[
                  {
                    required: true,
                    message: 'Estimated Calorie Burn',
                  },
                ]}
              >
                <Input type="number"  placeholder="Estimated Calorie Burn"  value={calorieBurn} onChange={getCalorieBurn}/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'More information about the workout video',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder='More information about the workout video' value={description} onChange={getDescription}/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
            </Admin>   
    </>
  )
}

export default AdminDashboard;

function value(value: any) {
  throw new Error('Function not implemented.');
}
