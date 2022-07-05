import React from 'react'
import ReactDOM from 'react'
import Card from './Card'
import Button from './Button'
import styles from './Modal.module.css'

// const BackDrop = (props) => {
// }
const Modal = (props) => {
	return (
		<div>
			<div className={styles.backdrop} onClick={props.onClose} />
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title || 'Error'}</h2>
				</header>
				<div className={styles.content}>
					<p>{props.message || 'content...'}</p>
				</div>
				<footer className={styles.actions}>
					<Button
						title='close'
						type='submit'
						onClick={props.onClose}
						autoFocus
					/>
				</footer>
			</Card>
		</div>
	)
}

export default Modal
