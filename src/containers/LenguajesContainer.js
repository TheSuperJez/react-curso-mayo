import { Col, FormControl, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';

import TablaLenguajes from '../components/lenguajes/TablaLenguajes';
import _ from 'underscore';

class LenguajesContainer extends Component {
	constructor(props, context) {
		super(props, context);
		this.cambiarCaja = this.cambiarCaja.bind(this);
		this.eliminarElemento = this.eliminarElemento.bind(this);
		this.state = {
			text: '',
			fecha: '',
			libraries: [
				{
					name: 'Backbone.js',
					url: 'http://documentcloud.github.io/backbone/',
					image: 'http://backbonejs.org/docs/images/backbone.png'
				},
				{ name: 'AngularJS', url: 'https://angularjs.org/' },
				{ name: 'jQuery', url: 'http://jquery.com/' },
				{ name: 'Prototype', url: 'http://www.prototypejs.org/' },
				{ name: 'React', url: 'http://facebook.github.io/react/' },
				{ name: 'Ember', url: 'http://emberjs.com/' },
				{ name: 'Knockout.js', url: 'http://knockoutjs.com/' },
				{ name: 'Dojo', url: 'http://dojotoolkit.org/' },
				{ name: 'Mootools', url: 'http://mootools.net/' },
				{ name: 'Underscore', url: 'http://documentcloud.github.io/underscore/' },
				{ name: 'Lodash', url: 'http://lodash.com/' },
				{ name: 'Moment', url: 'http://momentjs.com/' },
				{ name: 'Express', url: 'http://expressjs.com/' },
				{ name: 'Koa', url: 'http://koajs.com/' }
			]
		};
	}

	cambiarCaja(event) {
		let valorCajaDeTexto = event.target.value;
		let nombreCajaDeTexto = event.target.name;
		let newState = {};
		console.log("test: " + valorCajaDeTexto);
		newState[nombreCajaDeTexto] = valorCajaDeTexto;
		//el valor de newState quedaría como:
		//{"fecha": valorCajaDeTexto}
		this.setState(newState);
	}

	eliminarElemento(event) {
		let indice = event.target.attributes['data-index'].nodeValue;
		let nombre = event.target.attributes['data-name'].nodeValue;
		if(confirm('Seguro que desea eliminar ' + nombre)) {
			let tmpLibraries = Object.assign([], this.state.libraries);
			tmpLibraries.splice(indice, 1);
			this.setState({libraries: tmpLibraries});
		}
		
	}

	render() {
		let libraries = this.state.libraries;
		let text = this.state.text.toLocaleLowerCase();
		let lenguajesFiltrados = _.filter(libraries,
			function (lenguaje) {
				if (lenguaje.name.toLowerCase().startsWith(text)) {
					return true;
				} else {
					return false;
				}
			});
		return (
			<Grid>
				<Row>
					<Col md={2} sm={12} xs={12}>
						<div className="hidden-xs hidden-sm">
							{'Lenguaje: '}
						</div>
						<FormControl type="text"
							value={this.state.text}
							placeholder="Lenguaje"
							onChange={this.cambiarCaja}
							name="text" />

						<FormControl type="date"
							value={this.state.fecha}
							placeholder="Lenguaje"
							onChange={this.cambiarCaja}
							name="fecha" />


					</Col>
					<Col md={10} sm={12}>

						<TablaLenguajes
							id="test"
							lenguajes={lenguajesFiltrados}
							eliminarElemento={this.eliminarElemento}
						/>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default LenguajesContainer;
