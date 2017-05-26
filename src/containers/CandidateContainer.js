import React, {PropTypes} from 'react';
import {deleteCandidate, saveCandidate} from '../modules/candidateModule';

import {connect} from 'react-redux';

class CandidateContainer extends React.Component {

	constructor(props, context) {
		super(props, context); 
		this.eliminarCandidatos = this.eliminarCandidatos.bind(this);
		
		this.getYears = this.getYears.bind(this);	
	} 

	getYears(timestamp) {
		return Math.abs(new Date(new Date(timestamp) - new Date()).getUTCFullYear() - 1970) - 1;
	}

	eliminarCandidatos(event) {
		let index = event.target.attributes['data-index'].nodeValue;
		this.props.deleteCandidate(index);
	}
	

	render() {
		let components = this.props.children && React.cloneElement(this.props.children, {
			saveCandidate: this.props.saveCandidate,
			candidatesList: this.props.candidatesList,
			getYears: this.getYears,
			eliminarCandidatos: this.eliminarCandidatos
			
		});
		return (
			<div>
				{'Este es el componente de CandidateContainer'}
				{components}
				{'Arriba se montó la subruta'}
			</div>
		);
	}
}

CandidateContainer.propTypes = {
	children: PropTypes.object, 
	saveCandidate: PropTypes.func,
	candidatesList: PropTypes.array,
	deleteCandidate: PropTypes.func
}; 

function mapStateToProps(state) {
	return {
		candidatesList: state.candidateModule.get('candidatesList')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveCandidate: (candidate) => dispatch(saveCandidate(candidate)),
		deleteCandidate: (index) => dispatch(deleteCandidate(index))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateContainer);
