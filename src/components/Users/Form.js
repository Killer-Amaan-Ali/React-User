import React from 'react'
import Button from '../UI/Button'
const Form = (props) => {
	return (
		<form onSubmit={props.onSubmit}>
			<>
				<label htmlFor='username'>Name: </label>
				<input
					placeholder='Username'
					name='username'
					id='username'
					type='text'
					value={props?.usernameValue}
					onChange={props?.usernameOnChange}
				/>
			</>
			<>
				<label htmlFor='age'>Age (in years): </label>
				<input
					placeholder='Age'
					id='age'
					name='age'
					type='number'
					value={props?.ageValue}
					onChange={props?.ageOnChange}
				/>
			</>
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
			{/* <label htmlFor='date'>DOB: </label>
					<input
						type='date'
						name='date'
						id='date'
						value={props?.dateValue}
						onChange={props?.dateOnChange}
					/> */}
			{props.actions && (
				<div>
					{props.type === 'edit' ? (
						<Button
							title='Edit User'
							name='Edit User'
							value='Edit User'
							type='submit'>
							Edit User
						</Button>
					) : (
						<Button
							title='Add User'
							name='Add User'
							value='Add User'
							type='submit'>
							Add User
						</Button>
					)}
				</div>
			)}
		</form>
	)
}

export default Form
