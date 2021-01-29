import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// styles
import styles from '../../../styles/blogItem.module.css';

export default function BlogItem({item}) {

	useEffect(() => {
		const blog = document.querySelector(`#blog-item-${item.id}`);
		blog.style.backgroundImage = `url(${item.background})`;
	});

	return(
		<div id={`blog-item-${item.id}`} className={styles.item}>
			<div className={styles.content}>
				<p>{item.date}</p>
				<Link href=''>
					<a>
						<h5>{item.title}</h5>
					</a>
				</Link>
				<h6>{item.category}</h6>
			</div>
		</div>
	);
}

BlogItem.propTypes = {
	item: PropTypes.object
};