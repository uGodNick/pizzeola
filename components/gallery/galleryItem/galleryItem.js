import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

// styles
import styles from '../../../styles/galleryItem.module.css';

export default function GalleryItem({item, position, id}) {

	useEffect(() => {
		const photo = document.querySelector(`#photo-${id}`);
		photo.style.backgroundImage = `url(${item.background})`;
		photo.style.top = `${position.top}px`;
		photo.style.left = `${position.left}px`;
	});

	return(
		<div id={`photo-${id}`} className={`${styles.item} ${styles[item.size]}`}></div>
	);
}

GalleryItem.propTypes = {
	item: PropTypes.object,
	position: PropTypes.object,
	id: PropTypes.number
};

