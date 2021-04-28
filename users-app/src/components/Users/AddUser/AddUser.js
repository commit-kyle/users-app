import { useState } from 'react';

import classes from './AddUser.module.css';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const AddUser = props => {
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const [error, setError] = useState();

	const usernameChangeHandler = e => {
		setUsername(e.target.value);
	};

	const ageChangeHandler = e => {
		setAge(e.target.value);
	};

	const addUserHandler = e => {
		e.preventDefault();

		if (username.trim().length === 0 && age.trim().length === 0) {
			setError({
				title: 'Invalid details',
				message: 'Please provide your name and age to continue.'
			})
			return;
		} else if (username.trim().length === 0) {
			setError({
				title: 'Invalid username',
				message: 'Please provide a valid name to continue.'
			})
			return;
		} else if (age.trim().length === 0) {
			setError({
				title: 'Invalid age',
				message: 'Please provide your age to continue.'
			})
			return;
		} else if (+age < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please provide a valid age (more than zero) to continue.'
			})
			setAge('');
			return;
		}

		props.onAddUser(username, age);

		setUsername('');
		setAge('');
	};

	const onErrorHandler = () => {
		setError(null);
	}

	return (
		<div>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={onErrorHandler}/>}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						onChange={usernameChangeHandler}
						value={username}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="number"
						onChange={ageChangeHandler}
						value={age}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
