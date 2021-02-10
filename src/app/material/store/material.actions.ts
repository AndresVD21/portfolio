import { createAction, props } from "@ngrx/store";
import { FormData } from "../models/form-data";

export const SET_DATA = '[Material] Set Data';

export const setData = createAction(
    SET_DATA,
    props<{formData: FormData}>()
);