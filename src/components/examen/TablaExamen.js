import React, { PropTypes } from 'react';

import ExamenRow from './ExamenRow';
import { Table } from 'react-bootstrap';

const TablaExamen = ({ preguntasList, calificarPregunta }) => {
	return (
		<div className="TablaExamen">
			<Table>
				<thead>
					<th>
						<td>
							{'Pregunta'}
						</td>
						<td>
							{'Respuestas'}
						</td>
					</th>
				</thead>
				<tbody>
					{
						preguntasList.map(function (pregunta, index) {
							return (
								<ExamenRow  key={index} pregunta={pregunta}
									calificarPregunta={calificarPregunta} />
							);
						})
					}
				</tbody>
			</Table>
		</div>
	);
};

TablaExamen.propTypes = {
	preguntasList: PropTypes.array.isRequired,
	calificarPregunta: PropTypes.func.isRequired
};

export default TablaExamen;
