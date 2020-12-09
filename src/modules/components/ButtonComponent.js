import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientID = process.env.REACT_APP_CLIENT_ID;

export const ButtonComponent = ({
	userObj,
	handleLogin,
	handleLogout
}) => {
	return (
		<div>
			{!userObj ? (
				<span className='login-btn'>
					<GoogleLogin
						clientId={clientID}
						onSuccess={handleLogin}
						onFailure={handleLogin}
					/>
				</span>
			) : (
				<span>
					<GoogleLogout
						className='logout-btn'
						clientId={clientID}
						onLogoutSuccess={handleLogout}
					/>
				</span>
			)}
		</div>
	);
};
