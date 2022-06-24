import axios from 'axios';
import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { json } from 'stream/consumers';
import { CreateUserRequestAction, GetAllUsersRequestAction, GetUserInfoRequestAction, GetUserRoleRequestAction, LoginUserRequestAction } from './action';
import { INewUser, INITIAL_STATE, IUser, UserActionContext, UserContext } from './context';
import { UserReducer } from './reducer';
import {useRouter} from 'next/router';


const UserProvider : FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    const createUser = async (payload: INewUser) => {
        const localData = localStorage.getItem('token');
        await fetch ("https://localhost:44311/api/services/app/AppUser/Create", {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json",
                //Authorization: localData
            },
            
            body: JSON.stringify({name: payload.name, email: payload.email, password: payload.password, roleNames: ['User']})
        }).then(res => {
            console.log(payload)
            res.json().then( data => {
                dispatch(CreateUserRequestAction(payload));
                console.log(data.result?.items)
            })
        })
    }

    const loginUser = async (payload: IUser) => { 
            console.log('3', payload.email);  
            
            await fetch ("https://localhost:44311/api/TokenAuth/Authenticate",{
                method: 'POST',
                cache: 'no-cache',
            headers: {
                'Content-Type' :'application/json',
            },
            body: JSON.stringify({userNameOrEmailAddress: payload.email, password: payload.password}) 
        }).then(res => {
            res.json().then(data => localStorage.setItem('token', data.result['accessToken'])
            );
            const token = localStorage.getItem('token');
            dispatch(LoginUserRequestAction(token))
        })
    }

    
    const getUserInfo = async (payload: IUser) => {
        const token = localStorage.getItem('token');
        console.log('token under getUserInfo', token)
        await fetch(`https://localhost:44311/api/services/app/AppUser/GetByEmailPassword?email=${payload.email}&password=${payload.password}`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
        }).then(res => {
            res.json().then( data => {
                if(data?.success)dispatch(GetUserInfoRequestAction(data.result.items[0]))
            })
        })
    }

    const getUserRole = async(payload: number) => {
        console.log('pl', payload);
        const token = localStorage.getItem('token');
        console.log('token under getUserRole', token)
        await fetch(`https://localhost:44311/api/services/app/User/Get?Id=${payload}`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        }).then(res => {
            res.json().then( data => {
               if(data?.success)dispatch(GetUserRoleRequestAction(data.result['roleNames'][0]))
            })
        })
    }
        

        const getAllUsers = async () => {
            await fetch("https://localhost:44311/api/services/app/AppUser/GetAll", {
            method: 'get',
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            res.json().then( data => {
                //console.log(...data.result);
                console.log(data.result.items);
                if(data?.success)dispatch(GetAllUsersRequestAction(data.result?.items))
            })
        })
        }

  return (
    <UserContext.Provider value={state}>
            <UserActionContext.Provider 
                value={{createUser, loginUser, getUserInfo, getUserRole, getAllUsers}}>
                    {children}
            </UserActionContext.Provider>
        </UserContext.Provider>
  )
  }

function useCreateState() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }
    return context;   
}

function useCreateActions() {
    const context = useContext(UserActionContext);
    if (context === undefined) {
        throw new Error('useAuthActions must be used within a AuthProvider');
    }
    return context;
}

function useUser() {
    return {
        ...useCreateState(),
        ...useCreateActions()
    }
}

export { useUser, UserProvider}