import { ajaxCallError, beginAjaxCall } from './ajaxModule';

import { Candidate } from './stateDescriptor';
import Immutable from 'immutable';
import candidateApi from '../api/candidates';
import initialState from './initialState';

const LOAD_CANDIDATE_LIST_SUCCESS = 'LOAD_CANDIDATE_LIST_SUCCESS';
const SAVE_CANDIDATE_SUCCESS = 'SAVE_CANDIDATE_SUCCESS';

export default function reducer(state = initialState.get('candidateModule'), action) {
	switch (action.type) {
	case LOAD_CANDIDATE_LIST_SUCCESS: {
		return state.set('candidatesList', action.candidatesList);
	}
	case SAVE_CANDIDATE_SUCCESS: {
		let candidatos = Object.assign([], state.get('candidatesList'));
		candidatos.push(action.result);
		return state.set('candidatesList', candidatos);
	}
	default: return state;
	}
}

export const loadCandidates = () => {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return candidateApi.getAll().then(response => {
			let candidatesList = new Immutable.List();
			_.each(response.data.results, (element) => {
				let candidate = new Candidate(element);
				candidatesList = candidatesList.push(candidate);
			});
			dispatch({ type: LOAD_CANDIDATE_LIST_SUCCESS, candidatesList });
		}).catch(error => {
			dispatch(ajaxCallError(error));
			throw (error);
		});
	};
};

export const saveCandidate = (candidate) => {
	return (dispatch) => {
		dispatch({
			type: SAVE_CANDIDATE_SUCCESS,
			result: candidate
		});
	};
};
