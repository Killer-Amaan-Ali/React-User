import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

const gendersArray = ['male', 'female']
const App = () => {
	let userArrays = ''
	userArrays = JSON.parse(localStorage.getItem('userData')) || ''
	const [usersList, setUsersList] = useState([...userArrays])

	const addUserHandler = (uName, uAge, uGen, uId) => {
		setUsersList((prev) => {
			localStorage.setItem(
				'userData',
				JSON.stringify([
					...prev,
					{ name: uName, age: uAge, gen: uGen, id: uId },
				])
			)
			return [...prev, { name: uName, age: uAge, gen: uGen, id: uId }]
		})
	}
	return (
		<>
			<AddUser onAddUser={addUserHandler} genders={gendersArray} />
			<UserList users={usersList} genders={gendersArray} />
		</>
	)
}

export default App
