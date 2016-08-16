import Immutable from 'immutable';

let initialState = new Immutable.Map()
.set('questionModule', 
	new Immutable.Map().set('questionsList', new Immutable.List())
)
.set('ajaxModule', 0);

export default initialState;
