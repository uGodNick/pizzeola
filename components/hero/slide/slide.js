import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

import styles from '../../../styles/slide.module.css';

export default function Slide({advantage}) {
	return (
		<div className={styles.slide}>
			<Container>
				<Row className="justify-content-center">
					<Col>
						<div className={styles.title}>
							<h5> Our Pizza Comes with </h5>
							<h1> {advantage} </h1>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

Slide.propTypes = {
	advantage: PropTypes.string,
};