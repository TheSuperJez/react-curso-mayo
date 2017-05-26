import React, { PropTypes } from 'react';

import { Button } from 'react-bootstrap';

const CandidateTableRow = ({ nombre,
	apePaterno,
	apeMaterno,
	fechaNacimiento,
	getYears,
	index,
	eliminarCandidatos }) => {
	let time = parseInt((new Date(fechaNacimiento).getTime()));
	return (
		<tr>
			<td>
				{nombre}
			</td>
			<td>
				{apePaterno}
			</td>
			<td>
				{apeMaterno}
			</td>
			<td>
				{getYears(time)}
			</td>
			<td>
				<Button data-index={index} onClick={eliminarCandidatos}>{'Eliminar'}</Button>
			</td>
		</tr>
	);

};

CandidateTableRow.propTypes = {
	nombre: PropTypes.string.isRequired,
	apePaterno: PropTypes.string.isRequired,
	apeMaterno: PropTypes.string.isRequired,
	fechaNacimiento: PropTypes.string.isRequired,
	getYears: PropTypes.func.isRequired,
	index: PropTypes.number,
	eliminarCandidatos: PropTypes.func
};

export default CandidateTableRow;
