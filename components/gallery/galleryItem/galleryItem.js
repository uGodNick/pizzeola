import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

// styles
import styles from '../../../styles/galleryItem.module.css';

export default function GalleryItem({item}) {

	useEffect(() => {
		const itemList = document.querySelectorAll(`.${styles.item}`);
		itemList[item.id - 1].style.backgroundImage = `url(${item.background})`;
	});

	return(
		<div className={`${styles.item} ${styles[item.size]}`}></div>
	);
}

GalleryItem.propTypes = {
	item: PropTypes.object
};

