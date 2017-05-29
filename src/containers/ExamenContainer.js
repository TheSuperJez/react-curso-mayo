import React, { Component, PropTypes } from 'react';
import { calificarRespuesta, obtenerPreguntas } from '../modules/examenModule';

import TablaExamen from '../components/examen/TablaExamen';
import { connect } from 'react-redux';

class ExamenContainer extends Component {
	constructor(props, context) {
		super(props, context);
		this.cambiarCaja = this.cambiarCaja.bind(this);
		this.buscar = this.buscar.bind(this);
		this.state = {
			text: ''
		};
	}


	cambiarCaja(event) {
		let valorCajaDeTexto = event.target.value;
		let nombreCajaDeTexto = event.target.name;
		let newState = {};
		newState[nombreCajaDeTexto] = valorCajaDeTexto;
		//el valor de newState quedaría como:
		//{"fecha": valorCajaDeTexto}
		this.setState(newState);
	}

	buscar(e) {
		this.props.obtenerPreguntas(this.state.text);
	}
	render() {
		return (
			<div>
				<TablaExamen
					preguntasList={this.props.preguntasList}
					calificarPregunta={this.props.calificarRespuesta}
				/>
				{'Tu calificación es!: '}{this.props.calificacion}
				
				<h1>{'Buscar imagenes!!'}</h1>
				<br />
				<input type="text" name="text" onChange={this.cambiarCaja} />
				<button onClick={this.buscar}>{'test'}</button>
				<br />
				{this.props.imagenes.photos.photo.map(function(photo) {
					let img="https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg"
					.replace('{farm-id}', photo.farm)
					.replace('{server-id}', photo.server)
					.replace('{id}', photo.id)
					.replace('{secret}', photo.secret);
					return (
						
						<img src={img} />
					);
				})}
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
		calificacion: state.examenModule.get('calificacion'),
		imagenes: state.examenModule.get('imagenes')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		calificarRespuesta: (indicePregunta, indiceRespuesta) =>
			dispatch(calificarRespuesta(indicePregunta, indiceRespuesta)),
		obtenerPreguntas: (text) => dispatch(obtenerPreguntas(text))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamenContainer);
