import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

// components
import SectionTitle from './sectionTitle';

// styles
import styles from '../styles/breadcrumb.module.css';

export default function Breadcrumb({title, background}) {

	useEffect(() => {
		const breadcrumb = document.querySelector(`.${styles.breadcrumb}`);

		breadcrumb.style.backgroundImage = `url(${background})`;
	});

	return(
		<div className={styles.breadcrumb}>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle lgTitle={title}/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

Breadcrumb.propTypes = {
	title: PropTypes.string,
	background: PropTypes.string
};