import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
	return (
		<>
			{props?.href ? (
				<a href={props?.href} title={props?.title} className={styles.a}>
					<button
						className={`${styles?.button} ${
							props?.className ? props?.className : ''
						}`}
						onSubmit={props?.OnSubmit}
						onClick={props?.OnSubmit}
						type={props?.type || 'button'}
						name={props?.name}
						autoFocus={props?.autoFocus ? true : false}
						value={props?.value}
						disabled={props?.disabled ? true : false}>
						{props?.title}
					</button>
				</a>
			) : (
				<button
					className={`${styles?.button} ${
						props?.className ? props?.className : ''
					}`}
					onSubmit={props?.onSubmit}
					onClick={props?.onClick}
					type={props?.type || 'button'}
					name={props?.name}
					autoFocus={props?.autoFocus ? true : false}
					value={props?.value}
					disabled={props?.disabled ? true : false}>
					{props?.title}
				</button>
			)}
		</>
	)
}

export default Button
