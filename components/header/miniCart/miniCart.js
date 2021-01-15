import React from 'react';

//styles
import styles from '../../../styles/miniCart.module.css';

export default function MiniCart() {
	return (
		<div className={styles.cartItem}>
			<div className={styles.image}>
				<img src="/pizza-menu-1.jpg	"></img>
			</div>
			<div className={styles.description}>
				<span className={styles.name}>Classic Cheese</span>
				<span className={styles.price}>
					<b>$30.05</b>
					Amount:2
				</span>
				<span className={styles.quantity}>x</span>
			</div>
		</div>
	);
}