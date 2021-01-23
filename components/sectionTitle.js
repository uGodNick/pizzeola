import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from '../styles/sectionTitle.module.css';

export default function SectionTitle({smTitle, lgTitle}) {
	return(
		<div className={styles.title}>
			<h6>{smTitle}</h6>
			<h2>{lgTitle}</h2>
		</div>
	);	
}

SectionTitle.propTypes = {
	smTitle: PropTypes.string,
	lgTitle: PropTypes.string
};

