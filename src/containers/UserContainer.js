/**
 * @module User
 */
import React, { Component, PropTypes } from 'react';

import { Button } from 'react-bootstrap';

/**
 * Contenedor para los usuarios, muestra un timer.
 * 
 * @class UserContainer
 * @extends {Component}
 * @constructor
 */
class UserContainer extends Component {
	constructor(props, context) {
		super(props, context);
		this.tick = this.tick.bind(this);
		this.btnStart = this.btnStart.bind(this);
		this.eventoChange = this.eventoChange.bind(this);
		this.state = {
			mensaje: 'Tiempo: ',
			elapsed: 0,
			timer: setInterval(this.tick, 50),
			shouldUpdateTime: false,
			date: Date.now(),
			seleccionado: ''
		};
	}

	
	tick() {
		if (this.state.shouldUpdateTime) {
			this.setState({ elapsed: new Date() - this.state.date });
		}
	}

	btnStart() {
		this.setState({ shouldUpdateTime: true });
	}

	btnStop() {
		this.setState({ shouldUpdateTime: false });
	}

	componentDidMount() {
		let autostart = this.props.params.autostart;
		if (autostart) {
			this.btnStart();
		}
	}

	componentWillUnmount() {
		clearInterval(this.state.timer);
	}

	componentWillReceiveProps(newProps) {
		if (newProps.params.autostart) {
			this.btnStart();
		}
	}


	/**
	 * Manejador de evento que se ejecuta cuando  el boton es clickeado
	 * 
	 * @param {event} e  Evento del botón
	 * 
	 * @memberof UserContainer
	 */
	eventoChange(e) {
		let valor = e.target.value;
		alert(valor);
		this.setState({seleccionado: valor});
	}

	render() {
		let elapsed = Math.round(this.state.elapsed / 100);
		let seconds = (elapsed / 10).toFixed(1);
		return (
			<div>
				<div>
					<Button bsStyle="success"
						onClick={this.btnStart}>{'Iniciar'}</Button>
					<Button bsStyle="danger"
						onClick={this.btnStop}>{'Detener'}</Button>
				</div>
				<div>{this.state.mensaje}</div>
				<div>{seconds}</div>
				<input type="radio"
					checked={this.state.seleccionado === 'radio1'}
					value="radio1"
					onChange={this.eventoChange} />
				<input type="radio"
					value="radio2"
					checked={this.state.seleccionado === 'radio2'}
					onChange={this.eventoChange} />
			</div>
		);
	}
}
UserContainer.propType = {
	params: PropTypes.object
};

export default UserContainer;
