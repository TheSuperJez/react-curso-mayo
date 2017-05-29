import reducer, * as candidateModule from '../../modules/candidateModule';

import { expect } from 'chai';
import initialState from '../../modules/initialState';

describe('Reducer de candidate', () => {
	it('SAVE_CANDIDATE_SUCCESS:' +
		' Debe agregar un candidato.', () => {
		let test = {
			type: candidateModule.SAVE_CANDIDATE_SUCCESS,
			result: { test: 'test' }
		};
		let testState = reducer(initialState.candidateModule, test);
		expect(testState.get('candidatesList')).to.be.an('array');
		expect(testState.get('candidatesList')).to.have.lengthOf(1);
		expect(testState.get('candidatesList')[0]).to.have.a.property('test');
		expect(testState.get('candidatesList')[0].test).to.be.an.string;

	});
	
	it('DELETE_CANDIDATE' +
		' Debe eliminar un candidato.', () => {
		let testAdd = {
			type: candidateModule.SAVE_CANDIDATE_SUCCESS,
			result: { test: 'test' }
		};
		let testStateAdd = reducer(initialState.candidateModule, testAdd);

		let test = {
			type: candidateModule.DELETE_CANDIDATE,
			result: { test: 'test' }
		};
		let testState = reducer(testStateAdd, test);
		expect(testState.get('candidatesList')).to.be.an('array');
		expect(testState.get('candidatesList')).to.have.lengthOf(0);
		});
});
