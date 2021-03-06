import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

import { url } from '../../config';

export interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

export interface IFetchTodosAction {
	type: ActionTypes.FETCH_TODOS;
	payload: ITodo[];
}

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<ITodo[]>(url);

		dispatch<IFetchTodosAction>({
			type: ActionTypes.FETCH_TODOS,
			payload: response.data,
		});
	};
};
