import React from 'react';
import Link from 'next/link';

// styles
import styles from '../styles/logo.module.css';

export default function Logo() {
	return(
		<div className={styles.logo}>
			<Link href="/">
				<a>Pizze<b>o</b>la</a>
			</Link>
		</div>
	);
}