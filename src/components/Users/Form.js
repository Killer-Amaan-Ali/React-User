import React from 'react'
import Button from '../UI/Button'
const Form = (props) => {
	return (
		<form onSubmit={props.onSubmit}>
			{props.usernameValue && (
				<>
					<label htmlFor='username'>Name: </label>
					<input
						name='username'
						id='username'
						type='text'
						value={props?.usernameValue}
						onChange={props?.usernameOnChange}
					/>
				</>
			)}
			{props.ageValue && (
				<>
					<label htmlFor='age'>Age (in years): </label>
					<input
						id='age'
						name='age'
						type='number'
						value={props?.ageValue}
						onChange={props?.ageOnChange}
					/>
				</>
			)}
			{props.genValue && (
				<>
					<label htmlFor='gender'>Gender: </label>
					<select
						name='gender'
						id='gender'
						value={props?.genValue}
						onChange={props?.genOnChange}>
						{props?.gendersArray.map((gen) => {
							return (
								<option key={gen} value={gen}>
									{gen}
								</option>
							)
						})}
					</select>
				</>
			)}
			{/* <label htmlFor='date'>DOB: </label>
					<input
						type='date'
						name='date'
						id='date'
						value={props?.dateValue}
						onChange={props?.dateOnChange}
					/> */}
			{props.type === 'edit' ? (
				<Button
					title='Edit User'
					name='Edit User'
					value='Edit User'
					type='submit'>
					Edit User
				</Button>
			) : (
				<Button title='Add User' name='Add User' value='Add User' type='submit'>
					Add User
				</Button>
			)}
		</form>
	)
}

export default Form
