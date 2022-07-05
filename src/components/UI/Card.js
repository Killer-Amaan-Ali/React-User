import React from 'react'
import styles from './Card.module.css'
const Card = (props) => {
	return (
		<div
			className={`${styles?.card} ${props?.className}`}
			style={props?.style && props?.style}
			id={props?.id && props?.id}>
			{props?.children}
		</div>
	)
}

export default Card
