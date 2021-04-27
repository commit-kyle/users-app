import classes from './AddUser.module.css';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const AddUser = props => {
	const AddUserHandler = e => {
		e.preventDefault();
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={AddUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" />
				<label htmlFor="age">Age (Years)</label>
				<input id="age" type="text" />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
