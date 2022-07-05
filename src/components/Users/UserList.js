import React from 'react'
import Card from '../UI/Card'
import styles from './UserList.module.css'
const UserList = (props) => {
	return (
		<Card className={styles.users}>
			{props.users.length > 0 ? (
				<ul>
					{props.users.map((user, index) => {
						return (
							<li key={index}>
								{user.name} ({user.age})
							</li>
						)
					})}
				</ul>
			) : (
				<ul>
					<li>No users found, Maybe Add one?</li>
				</ul>
			)}
		</Card>
	)
}

export default UserList
