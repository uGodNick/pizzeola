import React from 'react';
import PropTypes from 'prop-types';
// components
import {SvgStar} from '../../svgCatalog';

// styles
import styles from '../../../styles/testimonialItem.module.css';

export default function TestimonialItem({review}) {

	function renderStars() {
		const stars = [];
		
		for (let i = 0; i < review.mark; i++) {
			stars.push(<SvgStar key={i}/>);
		}

		return stars;
	}

	return (
		<div className={styles.item}>
			<div className={styles.reviewMark}>
				{renderStars()}
			</div>
			<h2>
				&quot;{review.comment}&quot;
			</h2>
			<p>
				{review.author}
			</p>
		</div>
		);

}

TestimonialItem.propTypes = {
	review: PropTypes.object
};