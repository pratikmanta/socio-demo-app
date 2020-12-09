import { useState, useEffect } from 'react';
import { ButtonComponent } from '../components/ButtonComponent';
import '../app/App.css';
import UserProfile from '../components/UserProfile';

const App = () => {
	const [user, setUser] = useState(null);

	const handleLogin = (res) => {
		if (res) {
			setUser(res.profileObj);
			localStorage.setItem('user', JSON.stringify(res.profileObj));
		}
	};

	const handleLogout = () => {
		localStorage.clear();
		setUser(null);
	};

	useEffect(() => {
		const userExists = localStorage.getItem('user');
		if (userExists) {
			const existingUser = JSON.parse(userExists);
			setUser(existingUser);
		}
	}, []);

	return (
		<div className='App'>
			{!user ? (
				<ButtonComponent userObj={user} handleLogin={handleLogin} />
			) : (
				<div className='user-profile'>
					<UserProfile userData={user} />
					<ButtonComponent
						userObj={user}
						handleLogout={handleLogout}
					/>
				</div>
			)}
		</div>
	);
};

export default App;
