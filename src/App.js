import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

const gendersArray = ['male', 'female']
const App = () => {
	let userArrays = ''
	userArrays = JSON.parse(localStorage.getItem('userData')) || ''
	const [usersList, setUsersList] = useState([
		...userArrays,
		{ name: 'Amaan', age: '18', gen: gendersArray[0], id: 'u0' },
	])

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
	const deleteItemHandler = (uId) => {
		setUsersList((prev) => {
			const updatedGoals = prev.filter((user) => user.id !== uId)
			console.log(prev)
			console.log(
				'i got deleted :(',
				prev.filter((user) => user.id === uId)
			)
			return updatedGoals
		})
	}
	return (
		<>
			<AddUser onAddUser={addUserHandler} genders={gendersArray} />
			<UserList
				users={usersList}
				genders={gendersArray}
				onDelete={deleteItemHandler}
			/>
		</>
	)
}

export default App
