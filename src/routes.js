import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import CandidateContainer from './containers/CandidateContainer';
import CandidateForm from './components/candidate/CandidateForm';
import CandidateList from './components/candidate/CandidateList';
import ExamenContainer from './containers/ExamenContainer';
import LenguajesContainer from './containers/LenguajesContainer';
import QuestionContainer from './containers/QuestionContainer';
import QuestionForm from './components/question/QuestionForm';
import QuestionList from './components/question/QuestionList';
import React from 'react';
import UserContainer from './containers/UserContainer';

export default (
	<Route path="/" component={App}> 
		<Route path="question" component={QuestionContainer}>
			<IndexRoute component={QuestionList} />
			<Route path="new" component={QuestionForm} />
		</Route> 
		<Route path="candidate" component={CandidateContainer}>
			<IndexRoute component={CandidateList} />
			<Route path="new" component={CandidateForm} />
		</Route>
		<Route path="user/(:autostart)" component={UserContainer} />
		<Route path="user" component={UserContainer} />
		<Route path="lang" component={LenguajesContainer} />
		<Route path="examen" component={ExamenContainer} />
	</Route>
);
