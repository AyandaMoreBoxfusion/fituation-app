import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    YoutubeFilled,
    YoutubeOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { PropsWithChildren, useEffect, useState } from 'react';
  import {useRouter} from 'next/router';
import { useUser } from '../../providers/users';
import Nav from '../../components/Nav/Nav';
import Link  from 'next/link';
import styles from './styles.module.scss'
import Title from 'antd/lib/typography/Title';
import { Stats } from 'fs';


  
  const { Header, Content, Footer, Sider } = Layout;
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
   getItem('Dashboard', '0', <PieChartOutlined />),
    getItem('Profile', '1', <UserOutlined />),
    getItem('Home Workouts', 'sub1', <YoutubeFilled />, [
      getItem('Full Body', '2'),
      getItem('Upper Body', '3'),
      getItem('Legs', '4'),
      getItem('Abs', '5'),
      getItem('Glutes', '6'), 
    ]),
    getItem('Gym Workouts', 'sub2', <YoutubeOutlined />, 
    [getItem('Full Body', '7'), 
    getItem('Upper Body', '8'),
      getItem('Legs', '9'), 
      getItem('Abs', '10'), 
      getItem('Glutes', '11')]),
  ];
  
  const User: React.FC<PropsWithChildren> = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    
    const {UserCreated, AccessToken, UserInfo, getUserRole, UserRole}=useUser();
    const {push}=useRouter();

    const handleClick = (selectedKeys: any) => {
        console.log(selectedKeys.key);
        switch(selectedKeys.key) {
            case '0':
                push('/userDashboard');
                break;
            case '1':
              push('/userProfile');
              break;
            case '2':
                push('/homefullbody');
                break;
            case '3':
                push('/homeUpperBody');
                break;
            case '4':
                push('/homeLegs'); 
                break;
            case '5':
              push('/homeAbs');
              break;  
            case '6':
              push('/homeGlutes');
              break; 
            case '7':
              push('/gymFullBody');
              break;
            case '8':
              push('/gymUpperBody');
              break;
            case '9':
                push('/gymLegs');
                break;
            case '10':
                push('/gymAbs');
                break;
            case '11':
                push('/gymGlutes');
                break;
        }
    }

    return (
      <>
      <div className={styles.nav}>
          <Link href="/">
          <a><h1>Fituation</h1></a>
          </Link>
          <ul>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
            <Link href="/login">
              Log Out 
              </Link>
            </li>
          </ul>
        </div>
        <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{backgroundColor: '#bcccc8', color: 'black', left: 0}} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          <div className="logo" />
          <Menu defaultSelectedKeys={[]} mode="inline" items={items} style={{backgroundColor: '#bcccc8', marginTop:70}} onClick={handleClick}/>
        </Sider>
        <Layout className="site-layout" style={{margin: 50}}>
          <Content style={{ margin: '50px' }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Fituation, 2022</Footer>
        </Layout>
      </Layout>
      </>
    );
  };
  
  export default User;