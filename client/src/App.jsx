import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './componets/login';
import Signup from './componets/signup';
import HomePage from './componets/homepage';
import Nav from './componets/nav';

const initialUser = JSON.parse(localStorage.getItem('user_info')) || [];

function App() {
	const [user, setUser] = useState(initialUser);
	const updateUser = (newuser) => {
		localStorage.setItem('user_info', JSON.stringify(newuser));
		setUser(newuser);
	};
	return (
		<div className='App'>
			<Nav user={user} />
			<Routes>
				<Route
					path='/'
					// element={
					// 	user?.length ? <HomePage /> : <Navigate to='/account/login' />
					// }
					element={<HomePage />}
				/>
				<Route
					path='/account/login'
					element={
						user?.length ? <Navigate to='/' /> : <Login setUser={updateUser} />
					}
				/>
				<Route
					path='/account/signup'
					element={
						user?.length ? <Navigate to='/' /> : <Signup setUser={updateUser} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
