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
		</Card>
	)
}

export default UserList
