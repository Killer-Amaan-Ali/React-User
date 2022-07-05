import React from 'react'
import Card from '../UI/Card'
import styles from './UserList.module.css'
const UserList = (props) => {
	return (
		<Card className={styles.users}>
			{props.users.length > 0 ? (
				<ul>
					{props.users.map((user) => {
						return (
							<li key={user.id}>
								{user.name} ({user.age})
							</li>
						)
					})}
				</ul>
			) : (
				<ul>No users found, Maybe Add one?</ul>
			)}
			{console.log(
				'🚀 ~ file: UserList.js ~ line 20 ~ UserList ~ props.users',
				props.users
			)}
		</Card>
	)
}

export default UserList
