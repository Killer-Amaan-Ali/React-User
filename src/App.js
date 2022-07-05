import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

const App = () => {
	let arrays = ''
	if (localStorage.length > 0) {
		arrays = JSON.parse(localStorage?.getItem('data'))
	}
	const [usersList, setUsersList] = useState([...arrays])

	const addUserHandler = (uName, uAge, uId) => {
		setUsersList((prev) => {
			localStorage.setItem(
				'data',
				JSON.stringify([...prev, { name: uName, age: uAge, id: uId }])
			)
			return [...prev, { name: uName, age: uAge, id: uId }]
		})
	}
	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<UserList users={usersList} />
		</>
	)
}

export default App
