import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
	let arrays = ''
	if (localStorage.length > 0) {
		arrays = JSON.parse(localStorage?.getItem('data'))
	}
	const [usersList, setUsersList] = useState([...arrays])

	const addUserHandler = (uName, uAge) => {
		setUsersList((prev) => {
			localStorage.setItem(
				'data',
				JSON.stringify([...prev, { name: uName, age: uAge }])
			)
			return [...prev, { name: uName, age: uAge }]
		})
	}
	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UserList users={usersList} />
		</div>
	)
}

export default App
