import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserTable from './components/tables/UserTable';
import AddUserForm from './components/forms/AddUserForm';
import EditUserForm from './components/forms/EditUserForm';

const App = () => {
	const usersData = [
		{ id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
		{ id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
		{ id: uuidv4(), name: 'Ben', username: 'benisphere' },
	];

	const [users, setUsers] = useState(usersData);

	const addUser = (user) => {
		user.id = uuidv4();
		setUsers([...users, user]);
	};

	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	const [isEditing, setEditing] = useState(false);

	const initialFormState = { id: null, name: '', username: '' };
	const [currentUser, setCurrentUser] = useState(initialFormState);

	const editUser = (user) => {
		setEditing(true);
		setCurrentUser(user);
	};

	const updateUser = (id, editUser) => {
		setEditing(false);
		setUsers(users.map((user) => (user.id === id ? editUser : user)));
	};
	return (
		<div className='container'>
			<h1>CRUD App with Hooks</h1>
			<div className='flex-row'>
				<div className='flex-large'>
					{isEditing ? (
						<div>
							<h2>Edit user</h2>
							<EditUserForm user={currentUser} edit={updateUser} />
						</div>
					) : (
						<div>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</div>
					)}
				</div>
				<div className='flex-large'>
					<h2>View users</h2>
					<UserTable users={users} delete={deleteUser} isEditing={setEditing} edit={editUser} />
				</div>
			</div>
		</div>
	);
};

export default App;
