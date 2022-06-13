import React, { FC, PropsWithChildren, useContext, useReducer} from 'react';
import { CreateExerciseRequestAction } from './action';
import { ExerciseActionContext, ExerciseContext, IExercise, INITIAL_STATE } from './context';
import { ExerciseReducer } from './reducer';

const ExerciseProvider: FC<PropsWithChildren<FC>> = ({children}) => {
    const [state, dispatch ] = useReducer(ExerciseReducer, INITIAL_STATE);

    const createExercise = async (payload: IExercise) => {
        await fetch("https://localhost:44311/api/services/app/Exercise/Create", {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => {
            res.json().then( data => {
                dispatch(CreateExerciseRequestAction(payload));
            })
        })
    }

    return (
        <ExerciseContext.Provider value={state}>
            <ExerciseActionContext.Provider value={{createExercise}}>
                {children}
            </ExerciseActionContext.Provider>
        </ExerciseContext.Provider>
    )
}

function useExerciseState() {
    const context = useContext(ExerciseContext);
    if(!context) {
        throw new Error("useAuthActions must be used within an AuthProvider");
    }

    return context;
}

function useExerciseActionState() {
    const context = useContext(ExerciseActionContext);
    if(!context) {
        throw new Error("useAuthActions must be used within an AuthProvider");
    }

    return context;
}

function useExercises() {
    return {
        ...useExerciseState(),
        ...useExerciseActionState()
    }
}

export {useExercises, ExerciseProvider}