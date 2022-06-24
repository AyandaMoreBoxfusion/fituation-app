import { createAction } from 'redux-actions';
import { IExercise, IExerciseInfo, IExerciseStateContext, IFavouriteExercise, IFavouriteExerciseData } from './context';

//types of actions
export enum ExerciseActionEnum {
    CreateExerciseRequest = 'CREATE_EXERCISE',
    GetExerciseRequest = 'GET_EXERCISE',
    GetFavouriteExerciseRequest = 'GET_EXERCISE_INFO',
    FetchFavouriteExerciseRequest = 'FETCH_FAVOURITE_EXERCISE'
}

export const CreateExerciseRequestAction = createAction<IExerciseStateContext, IExercise>(ExerciseActionEnum.CreateExerciseRequest, (ExerciseCreated) => ({ExerciseCreated}));
export const GetExerciseRequestAction = createAction<IExerciseStateContext, IExerciseInfo[]>(ExerciseActionEnum.GetExerciseRequest, (ExerciseFound) => ({ExerciseFound}));
export const GetFavouriteExerciseRequest = createAction<IExerciseStateContext, IFavouriteExercise>(ExerciseActionEnum.GetFavouriteExerciseRequest, (FavouriteExercise) => ({FavouriteExercise}))
export const FetchFavouriteExerciseRequest = createAction<IExerciseStateContext, IFavouriteExerciseData[]>(ExerciseActionEnum.FetchFavouriteExerciseRequest, (favouriteExerciseFound) => ({favouriteExerciseFound}))
