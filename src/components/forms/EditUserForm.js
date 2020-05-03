import React from 'react';
import UserForm from './UserForm';

const EditUserForm = (props) => {
	const onSubmit = (data, e) => {
		data.id = props.user.id;
		props.edit(props.user.id, data);
		e.target.reset();
	};

	return <UserForm user={props.user} onSubmit={onSubmit} />;
};

export default EditUserForm;
