import React from 'react'
import Card from './Card'
import Button from './Button'
import styles from './Modal.module.css'

const Modal = (props) => {
	return (
		<div className={props.className}>
			<div className={styles.backdrop} onClick={props.onClose}>
				<Card className={styles.modal}>
					{props.title && (
						<header className={styles.header}>
							<h2>{props.title}</h2>
						</header>
					)}
					{props.message && (
						<div className={styles.content}>
							<p>{props.message}</p>
						</div>
					)}
					<div className={styles.children}>{props.children}</div>
					<footer className={styles.actions}>
						<Button
							title={props.no || 'close'}
							onClick={props.onClose}
							autoFocus>
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
			</div>
		</div>
	)
}

export default Modal
