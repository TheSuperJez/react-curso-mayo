import {Nav, NavItem, Navbar} from 'react-bootstrap';
import React, {PropTypes} from 'react';

import Dots from './common/Dots';
import {connect} from 'react-redux';
import {loadQuestions} from '../modules/questionModule';

class App extends React.Component {

	constructor(props, context) {
		super(props, context);   
	}

	componentDidMount() {
		this.props.loadQuestions();
	}
    
	render() {
		return (
			<div>
				<Navbar inverse>
					<Navbar.Header>
						<Navbar.Brand>
						<a href="#/question">
							{'React-Bootstrap'}
						</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="#/question/new">
								{'New Question'}
							</NavItem>
							<NavItem eventKey={2} href="#/candidate/new">
								{'New Candidate'}
							</NavItem> 
							<NavItem eventKey={4} href="#/lang">
								{'Lenguajes'}
							</NavItem> 
							<NavItem eventKey={5} href="#/user/">
								{'Timer'}
							</NavItem> 
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div className="container-fluid">
					{'Este es el componene APP'}
					{this.props.loading === true && (
						<Dots />
					)}
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object,
	loading: PropTypes.bool,
	questionList: PropTypes.object,
	loadQuestions: PropTypes.func
};

function mapStateToProps(state) {
	return {
		loading: state.ajaxModule > 0,
		questionList: state.questionModule.get('questionList')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadQuestions: () => dispatch(loadQuestions())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
