import { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
	const [users, setUsers] = useState();

	const addUserHandler = (username, age) => {
		setUsers(prevUsers => {
			if (prevUsers) {
				return [...prevUsers, { name: username, age: age }];
			} else {
				setUsers([{ name: username, age: age }]);
			}
		});
	};

	return (
		<Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={users} />
		</Fragment>
	);
}

export default App;
