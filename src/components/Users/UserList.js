import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import styles from './UserList.module.css'

const images = {
	badult: `${process.env.PUBLIC_URL}/assets/images/badult.png`,
	bteen: `${process.env.PUBLIC_URL}/assets/images/bteen.png`,
	bchild: `${process.env.PUBLIC_URL}/assets/images/bchild.png`,
	gadult: `${process.env.PUBLIC_URL}/assets/images/gadult.png`,
	gteen: `${process.env.PUBLIC_URL}/assets/images/gteen.png`,
	gchild: `${process.env.PUBLIC_URL}/assets/images/gchild.png`,
	default: `${process.env.PUBLIC_URL}/assets/images/default.png`,
}

const UserList = (props) => {
	const deleteHandler = (event) => {
		props.onDelete(event.target.id, event.target.name)
		localStorage.setItem('deletedUserId', event.target.id)
		// console.log(event.target.id, event.target.name)
	}
	const editHandler = (event) => {
		const editData = JSON.parse(localStorage.getItem('userData'))[
			event.target.value
		]
		console.log(
			"🚀 ~ file: UserList.js ~ line 25 ~ editHandler ~ localStorage.getItem('userData')",
			JSON.parse(localStorage.getItem('userData'))[event.target.value]
		)
		props.onEdit(editData.name, editData.age, editData.gen, editData.id)
	}
	const gender = props.genders
	let image = images.default
	let userAge
	return (
		<Card className={styles.users}>
			{props.users.length > 0 ? (
				<ul>
					{props.users.map((user, i) => {
						if (user.gen === gender[0]) {
							if (user.age >= 18) {
								image = images.badult
								userAge = 'adult'
							} else if (user.age >= 13) {
								image = images.bteen
								userAge = 'teen'
							} else {
								image = images.bchild
								userAge = 'child'
							}
						} else {
							if (user.age >= 18) {
								image = images.gadult
								userAge = 'adult'
							} else if (user.age >= 13) {
								image = images.gteen
								userAge = 'teen'
							} else {
								image = images.gchild
								userAge = 'child'
							}
						}
						return (
							<li key={user.id} title={user.id}>
								<div>
									<div>
										<img alt={user.gen} src={image} />
									</div>
									<div>
										Name:{' '}
										{user.gen === gender[1]
											? 'ms. '
											: user.gen === gender[0]
											? 'mr. '
											: ' '}
										{user.name} <br />
										Age: {user.age} ({userAge}
										)
										<br />
										Gender: {user.gen}
									</div>
								</div>
								<div>
									<Button
										value={i}
										style={{ marginRight: '10px' }}
										disabled={false}
										title={`edit ${user.id}?`}
										type='button'
										name={user.name}
										onClick={editHandler}
										id={user.id}>
										edit
									</Button>
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
