import { useState, Fragment, useRef } from 'react';

import classes from './AddUser.module.css';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const AddUser = props => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	const [error, setError] = useState();

	const addUserHandler = e => {
		e.preventDefault();

		let username = nameInputRef.current.value;
		let age = ageInputRef.current.value;

		if (username.trim().length === 0 && age.trim().length === 0) {
			setError({
				title: 'Invalid details',
				message: 'Please provide your name and age to continue.',
			});
			return;
		} else if (username.trim().length === 0) {
			setError({
				title: 'Invalid username',
				message: 'Please provide a valid name to continue.',
			});
			return;
		} else if (age.trim().length === 0) {
			setError({
				title: 'Invalid age',
				message: 'Please provide your age to continue.',
			});
			return;
		} else if (+age < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please provide a valid age (more than zero) to continue.',
			});
			ageInputRef.current.value = '';
			return;
		}

		props.onAddUser(username, age);

		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	const onErrorHandler = () => {
		setError(null);
	};

	return (
		<Fragment>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={onErrorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" ref={nameInputRef} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" ref={ageInputRef} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Fragment>
	);
};

export default AddUser;
