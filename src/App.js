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
	const [edit, setEdit] = useState()

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
			message: `Are you sure you want to delete '${uN}' (${uId})?`,
			yes: 'confirm',
			no: 'cancel',
		})
	}
	const openEditHandler = (uN, uA, uG, uId) => {
		setEdit({
			title: `Edit ${uN}`,
			message: `Are you sure you want to delete '${uN}' (${uId})?`,
			yes: 'confirm',
			no: 'cancel',
			userName: uN,
			userAge: uA,
			userGen: uG,
		})
	}
	const editItemHandler = () => {
		setUsersList((prev) => {
			const uId = localStorage.getItem('deletedUserId')
			const updatedUsers = prev.filter((user) => user.id !== uId)
			// console.log('updatedUsers', updatedUsers)
			// console.log('prev', prev)
			console.log('i got deleted :(', prev.filter((user) => user.id === uId)[0])
			localStorage.setItem('userData', JSON.stringify([...updatedUsers]))
			closeHandler()
			localStorage.removeItem('deletedUserId')
			return updatedUsers
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
			closeHandler()
			localStorage.removeItem('deletedUserId')
			return updatedUsers
		})
	}
	const closeHandler = () => {
		setError(null)
		setEdit(null)
	}
	return (
		<>
			<AddUser onAddUser={addUserHandler} genders={gendersArray} />
			<UserList
				users={usersList}
				genders={gendersArray}
				// onDelete={deleteItemHandler}
				onDelete={openErrorHandler}
				onEdit={openEditHandler}
			/>
			{error && (
				<Modal
					onSubmit={deleteItemHandler}
					onClose={closeHandler}
					title={error.title}
					message={error.message}
					yes={error.yes}
					no={error.no}
					confirm
				/>
			)}
			{edit && (
				<Modal
					onSubmit={editItemHandler}
					onClose={closeHandler}
					title={edit.title}
					// message={edit.message}
					yes={edit.yes}
					no={edit.no}
					confirm>
					<label htmlFor='username'>Name: </label>
					<input
						name='username'
						id='username'
						type='text'
						value={edit.userName}
						// onChange={}
					/>
					<label htmlFor='age'>Age (in years): </label>
					<input
						id='age'
						name='age'
						type='number'
						// onChange={}
						value={edit.userAge}
					/>
				</Modal>
			)}
		</>
	)
}

export default App
