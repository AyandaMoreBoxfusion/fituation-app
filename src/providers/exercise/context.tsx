import { createContext } from 'react';

export interface IExercise {
    Name: string,
    Description: string,
    Location: number,
    BodyTarget: number,
    Intensity: number,
    CalorieBurn: number,
    Link: string,
}

export interface IExerciseStateContext {
    readonly ExerciseCreated?: IExercise;
}

export const INITIAL_STATE: IExerciseStateContext = {};

//CRUD Actions
export interface IExerciseActionContext {
    createExercise?: (payload: IExercise) => void;
}

const ExerciseContext = createContext<IExerciseStateContext>(INITIAL_STATE)

//stores CRUD operations
const ExerciseActionContext = createContext<IExerciseActionContext>({});

export { ExerciseContext, ExerciseActionContext };