import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { CreateUserRequestAction, LoginUserRequestAction } from './action';
import { INewUser, INITIAL_STATE, IUser, UserActionContext, UserContext } from './context';
import { UserReducer } from './reducer';


const UserProvider : FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

    const createUser = async (payload: INewUser) => {
        await fetch ("https://localhost:44311/api/services/app/AppUser/Create", {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => {
            res.json().then( data => {
                dispatch(CreateUserRequestAction(payload));
            })
        })
    }

    const loginUser = async (payload: IUser) => {
        await fetch ("https://localhost:44311/api/services/app/AppUser/GetByEmailPassword", {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }).then(res => {
            res.json().then( data => {
                console.log(data);
                dispatch(LoginUserRequestAction(payload));
            })
        })
    }

  return (
    <UserContext.Provider value={state}>
            <UserActionContext.Provider 
                value={{createUser, loginUser}}>
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