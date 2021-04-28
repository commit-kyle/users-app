import classes from './UsersList.module.css';

import Card from '../UI/Card/Card';

const UsersList = props => {
	return (
		<Card className={classes.users}>
			{props.users ? (
				<ul>
					{props.users.map((user, idx) => (
						<li key={idx}>
							{user.name} ({user.age} years old)
						</li>
					))}
				</ul>
			) : null}
		</Card>
	);
};

export default UsersList;
