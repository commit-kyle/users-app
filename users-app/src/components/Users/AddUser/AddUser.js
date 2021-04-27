const AddUser = props => {
	const AddUserHandler = e => {
		e.preventDefault();
	};

	return (
		<form onSubmit={AddUserHandler}>
			<label htmlFor="username">Username</label>
			<input id="username" type="text" />
			<label htmlFor="age">Age (Years)</label>
			<input id="age" type="text" />
			<button type="submit">Add User</button>
		</form>
	);
};

export default AddUser;
