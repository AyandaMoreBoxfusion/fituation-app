import React, { FC, PropsWithChildren, useContext, useReducer} from 'react';
import { CreateExerciseRequestAction, FetchFavouriteExerciseRequest, GetExerciseRequestAction, GetFavouriteExerciseRequest } from './action';
import { ExerciseActionContext, ExerciseContext, IExercise, IFavouriteExercise, INITIAL_STATE } from './context';
import { ExerciseReducer } from './reducer';

const ExerciseProvider: FC<PropsWithChildren> = ({children}) => {
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

    const getExercise = async () => {
        await fetch("https://localhost:44311/api/services/app/Exercise/GetAll", {
            method: 'get',
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            res.json().then( data => {
                //console.log(...data.result);
                console.log(data.result.items);
                dispatch(GetExerciseRequestAction(data.result?.items))
            })
        })
    }

    const createFavouriteExercise = async (payload: IFavouriteExercise) => {
        await fetch("https://localhost:44311/api/services/app/UserFavourite/Create", {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => {
            res.json().then( data => {
                dispatch(GetFavouriteExerciseRequest(payload));
            })
        })
    }

   const fetchFavouriteExercise = async (payload: string) =>{
    await fetch(`https://localhost:44311/api/services/app/UserFavourite/Get?id=${payload}`, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => {
        res.json().then( data => {
            console.log('data',data.result?.items)
            dispatch(FetchFavouriteExerciseRequest(data.result?.items))
        })
    })
    }

    return (
        <ExerciseContext.Provider value={state}>
            <ExerciseActionContext.Provider value={{createExercise, getExercise, createFavouriteExercise, fetchFavouriteExercise}}>
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