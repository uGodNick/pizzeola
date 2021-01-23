import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// styles
import styles from '../../../styles/menuItem.module.css';

export default function MenuItem({item}) {

	useEffect(() => {
		const bgList = document.querySelectorAll(`.${styles.bg}`);
		bgList[item.id - 1].style.backgroundImage = `url(${item.background})`;
	});

	return(
		<div className={styles.menuItem}>
			<div className={styles.bg}></div>
			<h6>{item.name}</h6>
			<p>{item.description}</p>
			<p className={styles.price}>
				<b>${item.price}</b>
				Plus Tax
			</p>
			&nbsp;
			<Link href="/cart">
				<a className={styles.orderBtn}>Add to Cart</a>
			</Link>
			
		</div>
	);
}

MenuItem.propTypes = {
	item: PropTypes.object
};