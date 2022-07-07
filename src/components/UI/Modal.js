import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'
import styles from './Modal.module.css'

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClose} />
}
const Overlay = (props) => {
	return (
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
			<div className={props.className}>{props.children}</div>
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
	)
}
const Modal = (props) => {
	const backdrop = document.getElementById('backdrop-root')
	const overlay = document.getElementById('overlay-root')
	return (
		<div className={props?.className}>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, backdrop)}
			{ReactDOM.createPortal(
				<Overlay
					className={props.className}
					title={props.title}
					message={props.message}
					children={props.children}
					no={props.no}
					onClose={props.onClose}
					confirm={props.confirm}
					yes={props.yes}
					onSubmit={props.onSubmit}
				/>,
				overlay
			)}
		</div>
	)
}

export default Modal
