import { UserActionEnum } from "./action";
import { IUserStateContext } from "./context";

export function UserReducer(incomingState: IUserStateContext, action: ReduxActions.Action<IUserStateContext>){
    const { type, payload } = action;

    switch(type) {
        case UserActionEnum.CreateUserRequest:
        case UserActionEnum.LoginUserRequest:
                return {...incomingState, ...payload}
        default:
                return incomingState;
    }
}