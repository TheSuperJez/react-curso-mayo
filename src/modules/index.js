import ajaxModule from './ajaxModule';
import candidateModule from './candidateModule';
import {combineReducers} from 'redux';
import examenModule from './examenModule';
import questionModule from './questionModule';

const rootReducer = combineReducers({
	ajaxModule, 
	questionModule,
	candidateModule,
	examenModule
});

export default rootReducer;
