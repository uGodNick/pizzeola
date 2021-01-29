import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// styles
import styles from '../../styles/location.module.css';

export default function Location() {
	return(
		<div className={styles.location}>
			<Container>
				<Row className="justify-content-center">
					<Col lg={8} className="text-center">
						<div className={styles.title}>
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
	);
}