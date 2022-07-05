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
								Name: {/* {user.sal} */}
								{user.name} <br />
								Age: {user.age} ({user.age >= 18 ? 'adult' : 'child'})<br />
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
