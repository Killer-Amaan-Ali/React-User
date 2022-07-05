import React from 'react'
import Card from '../UI/Card'
import styles from './UserList.module.css'
const UserList = (props) => {
	const gender = props.genders
	console.log('🚀 ~ file: UserList.js ~ line 6 ~ UserList ~ gender', gender)
	return (
		<Card className={styles.users}>
			{props.users.length > 0 ? (
				<ul>
					{props.users.map((user) => {
						return (
							<li key={user.id}>
								Name:{' '}
								{user.gen === gender[1]
									? 'ms. '
									: user.gen === gender[0]
									? 'mr. '
									: ' '}
								{user.name} <br />
								Age: {user.age} (
								{user.age >= 18 ? 'adult' : user.age >= 13 ? 'teen' : 'child'}
								)<br />
								Gender: {user.gen}
							</li>
						)
					})}
				</ul>
			) : (
				<ul>No users found, Maybe Add one?</ul>
			)}
		</Card>
	)
}

export default UserList
