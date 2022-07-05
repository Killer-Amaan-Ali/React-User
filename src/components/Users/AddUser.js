import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import styles from './AddUser.module.css'
const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('')
	const [enteredAge, setEnteredAge] = useState('')
	const [error, setError] = useState()

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value)
	}

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value)
	}

	const SubmitHandler = (event) => {
		event.preventDefault()
		if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
			setError({ title: 'hey there', message: 'uuum, input something!' })
			return
		}
		if (+enteredAge < 1) {
			setError({ title: 'baby!', message: 'bruh, age cant be less than 0' })
			return
		}
		console.log('Name: ', enteredUsername)
		console.log('Age: ', enteredAge)
		props.onAddUser(enteredUsername, enteredAge)
		setEnteredUsername('')
		setEnteredAge('')
	}
	const closeErrorHandler = () => {
		setError()
	}

	return (
		<>
			{error && (
				<Modal
					onClose={closeErrorHandler}
					title={error.title}
					message={error.message}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={SubmitHandler}>
					<label htmlFor='username'>Username: </label>
					<input
						type='text'
						name='username'
						id='username'
						onChange={usernameChangeHandler}
						value={enteredUsername}
					/>
					<label htmlFor='age'>Age (in years): </label>
					<input
						type='number'
						name='age'
						id='age'
						onChange={ageChangeHandler}
						value={enteredAge}
					/>
					<Button
						title='Add User'
						name='Add User'
						value='Add User'
						type='submit'
					/>
				</form>
			</Card>
		</>
	)
}

AddUser.propTypes = {}

export default AddUser
