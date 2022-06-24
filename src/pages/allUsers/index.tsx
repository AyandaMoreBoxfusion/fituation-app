import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import Title from 'antd/lib/typography/Title';
import { getMaxListeners } from 'process';
import React from 'react';
import Admin from '../admin';

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  password: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 150,
  },
  {
    title: 'Password',
    dataIndex: 'password',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    email: `ed@gmail.com${i}`,
    password: `London, Park Lane no. ${i}`,
  });
}

const AllUsers: React.FC = () => {
    return(
        <>
        <Admin>
            <Title>Users</Title>
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
  </Admin>
  </>)
};

export default AllUsers;