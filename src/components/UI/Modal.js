import React from 'react'
import Card from './Card'
import Button from './Button'
import styles from './Modal.module.css'

const Modal = (props) => {
	return (
		<>
			<div className={styles.backdrop} onClick={props.onClose} />
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title || 'Error'}</h2>
				</header>
				<div className={styles.content}>
					<p>{props.message || 'content...'}</p>
				</div>
				<footer className={styles.actions}>
					<Button title={props.no || 'close'} onClick={props.onClose} autoFocus>
						{props.no || 'close'}
					</Button>
					{props.confirm && (
						<Button
							title={props.yes || 'ok'}
							type='submit'
							onClick={props.onSubmit}
							style={{ marginLeft: '10px' }}>
							{props.yes || 'ok'}
						</Button>
					)}
				</footer>
			</Card>
		</>
	)
}

export default Modal
