import React from 'react';
import UserForm from './UserForm';

const AddUserForm = (props) => {
	const onSubmit = (data, e) => {
		props.addUser(data);
		e.target.reset();
	};
	return <UserForm onSubmit={onSubmit} />;
};

export default AddUserForm;
