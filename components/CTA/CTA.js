import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// styles
import styles from '../../styles/CTA.module.css';

export default function CTA() {
	return(
		<div className={styles.cta}>
			<Container>
				<Row>
					<Col lg={6} md={6}>
						<div className={styles.leftContent}>
							<h2>Order Now</h2>
							<h6>Opening Hours</h6>
							<p>Sunday-Tuesday 10.00 - 23.00</p>
							<p>Friday-Saturday 09.00 - 24.00</p>
							<a href="#contact">Order online</a>
						</div>
					</Col>
					<Col lg={6} md={6}>
						<div className={styles.rightContent}>
							<h2>...and find outwhy we are named the Best Pizza!</h2>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}