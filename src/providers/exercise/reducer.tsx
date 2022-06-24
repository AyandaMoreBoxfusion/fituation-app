import { ExerciseActionEnum } from "./action";
import { IExerciseStateContext } from "./context";

export function ExerciseReducer(incomingState: IExerciseStateContext, action: ReduxActions.Action<IExerciseStateContext>){
    const { type, payload } = action;

    switch(type) {
        case ExerciseActionEnum.CreateExerciseRequest: 
        case ExerciseActionEnum.GetExerciseRequest:
        case ExerciseActionEnum.GetFavouriteExerciseRequest: 
        case ExerciseActionEnum.FetchFavouriteExerciseRequest:   
            return {...incomingState, ...payload}
        default:
            return incomingState;
    }
}
