import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

const App = () => {
	let userArrays = ''
	userArrays = JSON.parse(localStorage.getItem('userData')) || ''
	const [usersList, setUsersList] = useState([...userArrays])

	const addUserHandler = (uName, uAge, uId) => {
		setUsersList((prev) => {
			localStorage.setItem(
				'userData',
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
