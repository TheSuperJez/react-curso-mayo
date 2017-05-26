import { ajaxCallError, beginAjaxCall } from './ajaxModule';

import initialState from './initialState';

const CALIFICAR_PREGUNTA = 'CALIFICAR_PREGUNTA';

export default function reducer(state = initialState.get('examenModule'), action) {
	switch (action.type) {
	case CALIFICAR_PREGUNTA: {
		// Calificar Pregunta, todo
		return state;
	}
	default: return state;
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