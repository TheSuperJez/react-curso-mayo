import {
	ajaxCallError,
	beginAjaxCall,
} from './ajaxModule';

import examenApi from '../api/examenApi';
import initialState from './initialState';

const CALIFICAR_PREGUNTA = 'CALIFICAR_PREGUNTA';
const BUSCAR_IMAGENES_SUCCESS = 'BUSCAR_IMAGENES_SUCCESS,';

export default function reducer(state = initialState.get('examenModule'), action) {
	switch (action.type) {
		case CALIFICAR_PREGUNTA:
			{
				// Calificar Pregunta, todo
				return state;
			}
		case BUSCAR_IMAGENES_SUCCESS: {
			return state.set('imagenes', action.imagenes);
		}
		default:
			return state;
	}
}


export const calificarRespuesta = (indicePregunta, indiceRespuesta) => {
	return (dispatch) => {
		dispatch({
			type: CALIFICAR_PREGUNTA,
			indicePregunta: indicePregunta,
			IndiceRespuesta: indiceRespuesta
		});
	};
};

export const obtenerPreguntas = (text) => {
	return (dispatch) => {
		console.log('iniciando');
		dispatch(beginAjaxCall());
		return examenApi.buscar(text)
			.then(response => {
				console.log('exito');
				let respuesta = Object.assign({}, response.data);
				dispatch({
					type: BUSCAR_IMAGENES_SUCCESS,
					imagenes: respuesta 
				});
			}).catch(error => {
				console.log('error');
				console.log(error);
			});
	};
};
