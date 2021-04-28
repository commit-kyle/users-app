import { useState } from 'react';

import classes from './AddUser.module.css';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const AddUser = props => {
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');

	const usernameChangeHandler = e => {
		setUsername(e.target.value);
	};

	const ageChangeHandler = e => {
		setAge(e.target.value);
	};

	const AddUserHandler = e => {
		e.preventDefault();
		
    if (username.trim().length === 0 || age.trim().length === 0) {
			return;
    }
    if (+age < 1) {
			return;
    }
		
		props.onAddUser(username, age)

    setUsername('');
    setAge('');
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={AddUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					type="text"
					onChange={usernameChangeHandler}
					value={username}
				/>
				<label htmlFor="age">Age (Years)</label>
				<input id="age" type="number" onChange={ageChangeHandler} value={age} />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
