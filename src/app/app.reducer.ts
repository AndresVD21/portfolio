import { ActionReducerMap } from '@ngrx/store';
import * as fromMaterial from './material/store/material.reducer';

export interface AppState {
    material: fromMaterial.MaterialState
}

export const appReducers: ActionReducerMap<AppState> = {
    material: fromMaterial.materialReducer
}