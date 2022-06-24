import { UserActionEnum } from "./action";
import { IUserStateContext } from "./context";

export function UserReducer(incomingState: IUserStateContext, action: ReduxActions.Action<IUserStateContext>){
    const { type, payload } = action;

    switch(type) {
        case UserActionEnum.CreateUserRequest:
        case UserActionEnum.LoginUserRequest:
        case UserActionEnum.GetUserInfo:
        case UserActionEnum.GetUserRole:
        case UserActionEnum.GetAllUsersRequest:
                return {...incomingState, ...payload}
        default:
                return incomingState;
    }
}