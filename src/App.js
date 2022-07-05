import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'
import Modal from './components/UI/Modal'

const gendersArray = ['male', 'female']
const App = () => {
	const userArrays = JSON.parse(localStorage.getItem('userData')) || ''
	const [usersList, setUsersList] = useState([
		...userArrays,
		// { name: 'Amaan', age: '18', gen: gendersArray[0], id: 'u0' },
	])
	const [error, setError] = useState()

	const addUserHandler = (uName, uAge, uGen, uId) => {
		setUsersList((prev) => {
			localStorage.setItem(
				'userData',
				JSON.stringify([
					{ name: uName, age: uAge, gen: uGen, id: uId },
					...prev,
				])
			)
			return [{ name: uName, age: uAge, gen: uGen, id: uId }, ...prev]
		})
	}
	const openErrorHandler = (uId, uN) => {
		setError({
			title: 'Confirmation',
			message: `Do you want to delete '${uN}' (${uId})?`,
		})
	}
	const deleteItemHandler = () => {
		setUsersList((prev) => {
			const uId = localStorage.getItem('deletedUserId')
			const updatedUsers = prev.filter((user) => user.id !== uId)
			// console.log('updatedUsers', updatedUsers)
			// console.log('prev', prev)
			console.log('i got deleted :(', prev.filter((user) => user.id === uId)[0])
			localStorage.setItem('userData', JSON.stringify([...updatedUsers]))
			closeErrorHandler()
			localStorage.removeItem('deletedUserId')
			return updatedUsers
		})
	}
	const closeErrorHandler = () => {
		setError(null)
	}
	return (
		<>
			<AddUser onAddUser={addUserHandler} genders={gendersArray} />
			<UserList
				users={usersList}
				genders={gendersArray}
				// onDelete={deleteItemHandler}
				onDelete={openErrorHandler}
			/>
			{error && (
				<Modal
					onSubmit={deleteItemHandler}
					onClose={closeErrorHandler}
					title={error.title}
					message={error.message}
					confirm
				/>
			)}
		</>
	)
}

export default App
