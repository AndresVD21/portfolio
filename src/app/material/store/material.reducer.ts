import { Action, createReducer, on } from '@ngrx/store';
import * as MaterialActions from "./material.actions";

export interface MaterialState {
    firstName: string;
    lastName: string;
    preferredAnimal: string;
}

export const initialState: MaterialState = {
    firstName: '',
    lastName: '',
    preferredAnimal: ''
}

const _materialReducer = createReducer(
    initialState,
    on(MaterialActions.setData, (state, { formData }) => ({...state, firstName: formData.firstName, lastName: formData.lastName, preferredAnimal: formData.preferredAnimal}))
);

export function materialReducer(state: MaterialState | undefined, action: Action) {
    return _materialReducer(state, action);
}