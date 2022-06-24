import { createAction } from 'redux-actions';
import AllUsers from '../../pages/allUsers';
import User from '../../pages/user';
import { IUser, INewUser, IUserStateContext, IUserInfo } from './context';

//types of actions 
export enum UserActionEnum {
    CreateUserRequest = 'CREATE_USER',
    LoginUserRequest = "LOGIN_USER",
    GetUserInfo = "GET_USER_INFO",
    GetUserRole = "GET_USER_ROLE",
    GetAllUsersRequest = "GET_ALL_USERS"
}

export const CreateUserRequestAction = createAction<IUserStateContext, INewUser>(UserActionEnum.CreateUserRequest, (UserCreated) => ({UserCreated}));
export const LoginUserRequestAction = createAction<IUserStateContext, string>(UserActionEnum.LoginUserRequest,(AccessToken) => ({AccessToken}));
export const GetUserInfoRequestAction = createAction<IUserStateContext, IUserInfo>(UserActionEnum.GetUserInfo,(UserInfo) => ({UserInfo}));
export const GetUserRoleRequestAction = createAction<IUserStateContext, string>(UserActionEnum.GetUserRole,(UserRole) => ({UserRole}));
export const GetAllUsersRequestAction = createAction<IUserStateContext, IUserInfo[]>(UserActionEnum.GetAllUsersRequest,(AllUsers) => ({AllUsers}));