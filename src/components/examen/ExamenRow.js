import PropTypes from 'prop-types';
import React from 'react';

const ExamenRow = ({ pregunta, calificarPregunta }) => {
	return (
		<tr>
			<td>{pregunta.pregunta}</td>
			<td>
				<div>
					{pregunta.respuestas.map(function (respuesta, indice) {
						return (
							<div onClick={calificarPregunta}>
								{respuesta}
							</div>
						);
					})}
				</div>
			</td>
		</tr>
	);
};

ExamenRow.propTypes = {
	preguntasList: PropTypes.array.isRequired,
	calificarPregunta: PropTypes.func.isRequired
};

export default ExamenRow;
