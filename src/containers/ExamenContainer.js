import React, { Component, PropTypes } from 'react';

import TablaExamen from '../components/examen/TablaExamen';
import { calificarRespuesta } from '../modules/examenModule';
import { connect } from 'react-redux';

class ExamenContainer extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				<TablaExamen
					preguntasList={this.props.preguntasList}
					calificarPregunta={this.props.calificarRespuesta}
				/>

				{'Tu calificación es: '}{this.props.calificacion}
			</div>
		);
	}
}

ExamenContainer.propTypes = {
	preguntasList: PropTypes.array,
	calificacion: PropTypes.number,
	calificarRespuesta: PropTypes.func
};

function mapStateToProps(state) {
	return {
		preguntasList: state.examenModule.get('preguntasList'),
		calificacion: state.examenModule.get('calificacion')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		calificarRespuesta: (indicePregunta, indiceRespuesta) =>
			dispatch(calificarRespuesta(indicePregunta, indiceRespuesta))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamenContainer);
