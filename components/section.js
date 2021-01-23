import React from 'react';

// styles
import styles from '../styles/section.module.css';

export default function Section(props) {

	return (
		<div className={styles.section}>
			{props.children}
		</div>
		);

}