import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

// components
import Section from '../section';

// styles
import styles from '../../styles/location.module.css';

export default function Location({color}) {
	return(
		<Section>
			<div className={`${styles[color]} ${styles.location}`}>
				<Container>
					<Row className="justify-content-center">
						<Col lg={8} className="text-center">
							<div className={`${styles[color]} ${styles.title}`}>
								<h2>Location</h2>
								<p>
									235 Mulburry Streat New York,
									<br/>
									NY 10012 (212) 965-0500
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</Section>
	);
}

Location.propTypes = {
	color: PropTypes.string
};