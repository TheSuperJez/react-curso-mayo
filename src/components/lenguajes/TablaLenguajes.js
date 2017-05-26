import {Button, Glyphicon, Table} from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';

const TablaLenguajes = ({lenguajes, eliminarElemento}) => {
	return (
		<Table striped bordered condensed hover id="TablaLenguajes">
							<thead>
								<tr>
									<th>
										{'Nombre'} 
									</th>
									<th>
										{'Url'} 
									</th>
									<th>
										{'Eliminar'} 
									</th>
								</tr>
							</thead>
							<tbody>
							{lenguajes.map(function (lenguaje, index) {
								return (<tr key={index}>
									<td>{lenguaje.name}</td>
									<td><a href={lenguaje.url}>{'Visitar'}</a></td>
									<td><Button data-index={index}
										onClick={eliminarElemento}
										data-name={lenguaje.name}>
										<Glyphicon glyph="trash"
											data-index={index}
											data-name={lenguaje.name}/>
										</Button></td>
								</tr>);
							})}
							</tbody>
						</Table>
	);
};

TablaLenguajes.propTypes = {
	lenguajes: PropTypes.array.isRequired,
	eliminarElemento: PropTypes.func.isRequired
};

export default TablaLenguajes;
