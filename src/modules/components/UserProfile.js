import React from 'react';

const UserProfile = ({ userData }) => {
	return (
		<div className='user-card-container'>
			<div className='user-card'>
				<div class='left'>
					<img src={userData.imageUrl} width='200px' height='200px' />
					<h3>{userData.name}</h3>
					<span style={{ fontSize: '15px' }}>
						Karnataka, Bangalore
					</span>
				</div>
				<div className='right'>
					<fieldset class='user-description'>
						<legend>User Profile</legend>
						<h4>
							Email : <span>{userData.email}</span>
						</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu
							fugiat nulla pariatur. Excepteur sint occaecat cupidatat
							non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum."
						</p>
					</fieldset>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
