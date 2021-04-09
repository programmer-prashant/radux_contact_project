import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NavBar from './components/layout/NavBar';
import './styles/App.scss';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<NavBar />
					<div className='container'>
						<div className='py-3'>
							<Switch>
								<Route exact path='/' component={Contacts} />
								<Route exact path='/contacts/add' component={AddContact} />
								<Route
									exact
									path='/contacts/edit/:id'
									component={EditContact}
								/>
							</Switch>
						</div>
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
