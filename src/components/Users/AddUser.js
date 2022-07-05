import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import styles from './AddUser.module.css'

const AddUser = (props) => {
	const defGen = props.genders[0]
	const [enteredUsername, setEnteredUsername] = useState('')
	const [enteredAge, setEnteredAge] = useState('')
	const [enteredGen, setEnteredGen] = useState(defGen)
	const [error, setError] = useState()

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value)
	}

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value)
	}

	const genChangeHandler = (event) => {
		setEnteredGen(event.target.value)
	}

	const SubmitHandler = (event) => {
		event.preventDefault()
		if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
			setError({ title: 'hey there', message: 'uuum, input something!' })
			return
		}
		if (+enteredAge < 1) {
			setError({
				title: 'baby!',
				message: 'bruh, age cant be less than / equal to 0',
			})
			return
		}
		props.onAddUser(
			enteredUsername,
			enteredAge,
			enteredGen,
			`u${Math.random()}`
		)
		setEnteredUsername('')
		setEnteredAge('')
		setEnteredGen(defGen)
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
					<label htmlFor='username'>name: </label>
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
					<label htmlFor='gender'>Gender: </label>
					<select
						name='gender'
						id='gender'
						value={enteredGen}
						label='Age'
						onChange={genChangeHandler}>
						{props.genders.map((gen, i) => {
							return (
								<option key={gen} value={gen}>
									{gen}
								</option>
							)
						})}
					</select>
					<Button
						title='Add User'
						name='Add User'
						value='Add User'
						type='submit'>
						Add User
					</Button>
				</form>
			</Card>
		</>
	)
}

AddUser.propTypes = {}

export default AddUser
