import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react'
import { useUser } from '../../providers/users';

const Redirect : FC = () => {
    const {UserCreated, AccessToken, UserInfo, getUserRole, UserRole}=useUser();
    const {push}=useRouter();
    //const token = localStorage.getItem('token');
    console.log('Redirect info', AccessToken)
    console.log('Redirect info',UserInfo)
    console.log('get userid redirect',UserInfo?.userId)

    useEffect(() =>{
        getUserRole(UserInfo?.userId);
    } 
    )
    

    console.log('redirect role', UserRole);

    switch(UserRole){
        case 'USER':
            push('/userDashboard')
            break;
        case 'ADMIN':
            push('/adminDashboard')
            break;
        }
   
  return (
    <div>Redirecting....</div>
  )
}

export default Redirect