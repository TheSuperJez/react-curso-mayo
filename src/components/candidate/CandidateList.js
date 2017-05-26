import React, {PropTypes} from 'react';

import CandidateRow from './CandidateTableRow';
import {Table} from 'react-bootstrap';

const CandidateList = ({candidatesList, getYears, eliminarCandidatos}) => {
	let candidate = candidatesList.map((element, index) => {
		let propiedades = element;
		propiedades.getYears = getYears;
		propiedades.index = index;
		propiedades.eliminarCandidatos = eliminarCandidatos;
		return (
			<CandidateRow key={index} {...propiedades} />
		); 
	}); 
	return ( 
		<Table striped bordered condensed hover>
			<thead>
				<tr>
					<th>{'Nombre'}</th>
					<th>{'Ape paterno'}</th>
					<th>{'Ape materno'}</th>
					<th>{'Edad'}</th>
					<th>{'Eliminar'}</th>
				</tr>
			</thead>
			<tbody>
				{candidate}
			</tbody>	
		</Table>
	);
};

CandidateList.propTypes = {
	candidatesList: PropTypes.array,
	getYears: PropTypes.func,
	eliminarCandidatos: PropTypes.func
};

export default CandidateList;
