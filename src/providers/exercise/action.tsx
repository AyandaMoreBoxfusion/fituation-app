import { createAction } from 'redux-actions';
import { IExercise, IExerciseStateContext } from './context';

//types of actions
export enum ExerciseActionEnum {
    CreateExerciseRequest = 'CREATE_EXERCISE'
}

export const CreateExerciseRequestAction = createAction<IExerciseStateContext, IExercise>(ExerciseActionEnum.CreateExerciseRequest, (ExerciseCreated) => ({}));
