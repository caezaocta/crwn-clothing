import './category-item.styles.scss'

import React from 'react'

const CaetgoryItem = ({ category }) => {

	const { imageUrl, title, id } = category
	return (
		<>
			<div key={id} className="category-container">
				<div className="background-image"
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>
				<span className="category-body-container">
					<h2>{title}</h2>
					<p>Shop Now</p>
				</span>
			</div>
		</>
	)
}

export default CaetgoryItem