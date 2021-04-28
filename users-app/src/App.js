import { useState } from 'react';

import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (username, age) => {
    setUsers(prevUsers => {
      return [...prevUsers, {name: username, age: age}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
