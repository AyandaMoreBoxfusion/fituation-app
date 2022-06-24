import { UserInfo } from 'os';
import { createContext } from 'react';

//A.K.A The object for the user in my db
export interface INewUser {
    name: string,
    email: string,
    password: string,
    roleName: string[]}

export interface IUser {
    email: string,
    password: string  
}

export interface IUserInfo {
    email: string,
    id: string,
    name: string,
    password: string,
    roleNames: string[],
    userId: number
}


///What must be returned
export interface IUserStateContext {
    readonly UserCreated?: INewUser;
    readonly AccessToken?: string;
    readonly UserInfo?: IUserInfo;
    readonly UserRole?: string;
    readonly AllUsers?: IUserInfo[];
} 

export const INITIAL_STATE: IUserStateContext = {};

//CRUD Actions
export interface IUserActionContext {
    createUser?: (payload: INewUser) => void;
    loginUser?:(payload: IUser) => void;
    getUserInfo?:(payload: IUser) => void;
    getUserRole?:(payload: number) => void;
    getAllUsers?:() => void;
}

const UserContext = createContext<IUserStateContext>(INITIAL_STATE);

//stores CRUD operations
const UserActionContext = createContext<IUserActionContext>({});


export { UserContext, UserActionContext };
