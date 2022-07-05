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
						id={props?.id}
						onClick={props?.OnSubmit}
						type={props?.type || 'button'}
						name={props?.name || props?.title}
						autoFocus={props?.autoFocus ? true : false}
						value={props?.value}
						disabled={props?.disabled ? true : false}>
						{props?.children ? props?.children : 'button...'}
					</button>
				</a>
			) : (
				<button
					style={props.style}
					title={props?.title}
					className={`${styles?.button} ${
						props?.className ? props?.className : ''
					}`}
					onSubmit={props?.onSubmit}
					id={props?.id}
					onClick={props?.onClick}
					type={props?.type || 'button'}
					name={props?.name}
					autoFocus={props?.autoFocus ? true : false}
					value={props?.value}
					disabled={props?.disabled ? true : false}>
					{props?.children ? props?.children : 'button...'}
				</button>
			)}
		</>
	)
}

export default Button
