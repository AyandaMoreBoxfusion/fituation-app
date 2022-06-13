import { createAction } from 'redux-actions';
import { IUser, INewUser, IUserStateContext } from './context';

//types of actions 
export enum UserActionEnum {
    CreateUserRequest = 'CREATE_USER',
    LoginUserRequest = "LOGIN_USER"
}

export const CreateUserRequestAction = createAction<IUserStateContext, INewUser>(UserActionEnum.CreateUserRequest, (UserCreated) => ({}));
export const LoginUserRequestAction = createAction<IUserStateContext, IUser>(UserActionEnum.LoginUserRequest,(UserLogin) => ({}));