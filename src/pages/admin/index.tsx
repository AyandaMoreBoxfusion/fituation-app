import {
    DesktopOutlined,
    FileOutlined,
    LogoutOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
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
   getItem('Dashboard', '0',  <PieChartOutlined />),
    getItem('Profile', '1', <UserOutlined />),
    getItem('Workout Videos', '2', <YoutubeOutlined />),
    getItem('Users', '3', <TeamOutlined />)
  ];
  
  const Admin: React.FC<PropsWithChildren> = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {push}=useRouter();
    const {UserCreated, UserInfo}=useUser();

    useEffect(() => {
      if (UserInfo != null) {
        console.log(UserInfo);
      }
    }, [UserInfo])
    
    const userDetails = UserInfo != null ? UserInfo : UserCreated;
    const handleClick = (selectedKeys: any) => {
        console.log(selectedKeys.key);
        switch(selectedKeys.key) {
            case '0':
                push('/adminDashboard');
                break;
            case '1':
                push('/adminProfile');
                break;
            case '2':
                push('/allExercises');
                break;
            case '3':
                push('/allUsers');
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
            <LogoutOutlined />
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
  
  export default Admin;