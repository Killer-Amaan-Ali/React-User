import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import styles from './UserList.module.css'

// import bchild from '../../assets/images/bchild.png'
// import bteen from '../../assets/images/bteen.png'
// import badult from '../../assets/images/badult.png'
// import gchild from '../../assets/images/gchild.png'
// import gteen from '../../assets/images/gteen.png'
// import gadult from '../../assets/images/gadult.png'

const UserList = (props) => {
	const deleteHandler = (event) => {
		props.onDelete(event.target.id, event.target.name)
		localStorage.setItem('id', event.target.id)
		// console.log(event.target.id, event.target.name)
	}
	const gender = props.genders
	return (
		<Card className={styles.users}>
			{props.users.length > 0 ? (
				<ul>
					{props.users.map((user) => {
						return (
							<li key={user.id} title={user.id}>
								<div>
									<div>
										<img
											alt={user.gen}
											// src={}
										/>
									</div>
									<div>
										Name:{' '}
										{user.gen === gender[1]
											? 'ms. '
											: user.gen === gender[0]
											? 'mr. '
											: ' '}
										{user.name} <br />
										Age: {user.age} (
										{user.age >= 18
											? 'adult'
											: user.age >= 13
											? 'teen'
											: 'child'}
										)
										<br />
										Gender: {user.gen}
									</div>
								</div>
								<div>
									<Button
										title={`delete ${user.id}?`}
										type='button'
										name={user.name}
										onClick={deleteHandler}
										id={user.id}>
										delete
									</Button>
								</div>
							</li>
						)
					})}
				</ul>
			) : (
				<p>No users found, Maybe Add one?</p>
			)}
		</Card>
	)
}

export default UserList
