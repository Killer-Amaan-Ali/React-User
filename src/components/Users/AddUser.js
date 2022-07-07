import React, { useState } from 'react'
import Card from '../UI/Card'
import Modal from '../UI/Modal'
import Form from './Form'
import styles from './AddUser.module.css'
const AddUser = (props) => {
	const [error, setError] = useState()
	const defGen = props.genders[0]
	const [enteredUsername, setEnteredUsername] = useState('')
	const [enteredAge, setEnteredAge] = useState('')
	const [enteredGen, setEnteredGen] = useState(defGen)
	// const [enteredDate, setEnteredDate] = useState('')

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value)
	}

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value)
	}

	const genChangeHandler = (event) => {
		setEnteredGen(event.target.value)
	}

	// const dateChangeHandler = (event) => {
	// 	setEnteredDate(event.target.value)
	// }

	const SubmitHandler = (event) => {
		event.preventDefault()
		if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
			setError({ title: 'hey there', message: 'uuum, input something!' })
			return
		}
		console.log(
			'🚀 ~ file: AddUser.js ~ line 33 ~ SubmitHandler ~ enteredUsername',
			enteredUsername
		)
		if (+enteredAge < 1) {
			setError({
				title: 'baby!',
				message: `bruh, age cant be less than / equal to 0  (Entered age: ${+enteredAge})`,
			})
			return
		} else if (+enteredAge > 80) {
			setError({
				title: 'old!',
				message: `bruh, age cant be more than 80! (Entered age: ${+enteredAge})`,
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
				<Form
					onSubmit={SubmitHandler}
					usernameValue={enteredUsername}
					usernameOnChange={usernameChangeHandler}
					ageValue={enteredAge}
					ageOnChange={ageChangeHandler}
					genValue={enteredGen}
					genOnChange={genChangeHandler}
					gendersArray={props.genders}
					actions
				/>
			</Card>
		</>
	)
}

AddUser.propTypes = {}

export default AddUser
