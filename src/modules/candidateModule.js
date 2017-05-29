import { ajaxCallError, beginAjaxCall } from './ajaxModule';

import { Candidate } from './stateDescriptor';
import Immutable from 'immutable';
import candidateApi from '../api/candidates';
import initialState from './initialState';

export const LOAD_CANDIDATE_LIST_SUCCESS = 'LOAD_CANDIDATE_LIST_SUCCESS';
export const SAVE_CANDIDATE_SUCCESS = 'SAVE_CANDIDATE_SUCCESS';
export const DELETE_CANDIDATE = 'DELETE_CANDIDATE';

export default function reducer(state = initialState.get('candidateModule'), action) {
	switch (action.type) {
		case LOAD_CANDIDATE_LIST_SUCCESS: {
			return state.set('candidatesList', action.candidatesList);
		}
		case SAVE_CANDIDATE_SUCCESS: {
			let candidatos = Object.assign([], state.get('candidatesList'));
			candidatos.push(action.result);
			//action.error;
			return state.set('candidatesList', candidatos);
		}
		case DELETE_CANDIDATE: {
			let candidatos = Object.assign([], state.get('candidatesList'));
			candidatos.splice(action.index, 1);
			return state.set('candidatesList', candidatos);
		}
		default: return state;
	}
}

export const loadCandidates = () => {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return candidateApi.getAll()
			.then(response => {
				let candidatesList = new Immutable.List();
				_.each(response.data.results, (element) => {
					let candidate = new Candidate(element);
					candidatesList = candidatesList.push(candidate);
				});
				dispatch({
					type: LOAD_CANDIDATE_LIST_SUCCESS,
					candidatesList: candidatesList
				});
			}).catch(error => {
				dispatch(ajaxCallError(error));
				throw (error);
			});
		/*	let numero=10;
			let funcionExito = function(archivos) {
				alert(archivos[numero]);
			};

		moverArchivos.then(funcionExito).catch(function (error) {

		});
		alert('prueba');
*/
	};
};

export const saveCandidate = (candidate) => {
	// candidate = {nombre: "Juan", apellido: "ramirez"}
	return (dispatch) => {
		dispatch({
			type: SAVE_CANDIDATE_SUCCESS,
			result: candidate,
			error: false
		});
	};
};


export const deleteCandidate = (index) => {
	return (dispatch) => {
		dispatch({
			type: DELETE_CANDIDATE,
			index: index
		});
	};
};
