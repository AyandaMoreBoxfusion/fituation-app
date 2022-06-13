import { createContext } from 'react';


//A.K.A The object for the user in my db
export interface INewUser {
    Name: string,
    Email: string,
    Password: string,
}

export interface IUser {
    Email: string,
    Password: string  
}

///What must be returned
export interface IUserStateContext {
    readonly UserCreated?: INewUser;
    readonly UserLogin?: IUser;
} 

export const INITIAL_STATE: IUserStateContext = {};

//CRUD Actions
export interface IUserActionContext {
    createUser?: (payload: INewUser) => void;
    loginUser?:(payload: IUser) => void;
}

const UserContext = createContext<IUserStateContext>(INITIAL_STATE);

//stores CRUD operations
const UserActionContext = createContext<IUserActionContext>({});


export { UserContext, UserActionContext };
