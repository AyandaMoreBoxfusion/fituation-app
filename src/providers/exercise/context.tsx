import { createContext } from 'react';

export interface IExercise {
    name: string,
    description: string,
    location: number,
    bodyTarget: number,
    intensity: number,
    calorieBurn: number,
    link: string,
}

export interface IExerciseInfo {  
  id: string,
  name: string,
  description: string
  location: number,
  bodyTarget: number,
  intensity: number,
  calorieBurn: number,
  link: string
}

export interface IFavouriteExercise {
    userId: string,
    exerciseId: string
}

export interface IFavouriteExerciseData {
    id: string,
    userId: string,
    exerciseId: string
}

export interface IExerciseStateContext {
    readonly ExerciseCreated?: IExercise;
    readonly ExerciseFound?: IExerciseInfo[];
    readonly FavouriteExercise?: IFavouriteExercise;
    readonly favouriteExerciseFound?: IFavouriteExerciseData[];
}


export const INITIAL_STATE: IExerciseStateContext = {};

//CRUD Actions
export interface IExerciseActionContext {
    createExercise: (payload: IExercise) => void;
    getExercise: () => void;
    createFavouriteExercise: (payload: IFavouriteExercise) => void;
    fetchFavouriteExercise: (payload: string) => void; 
}

const ExerciseContext = createContext<IExerciseStateContext>(INITIAL_STATE)

//stores CRUD operations
//@ts-ignore
const ExerciseActionContext = createContext<IExerciseActionContext>({});

export { ExerciseContext, ExerciseActionContext };