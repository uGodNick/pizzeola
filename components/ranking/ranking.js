import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// components
import Section from '../section';
import SectionTitle from '../sectionTitle';

// styles
import styles from '../../styles/ranking.module.css';

export default function Ranking() {
	return (
		<div className={styles.ranking}>
			<Section>
				<Container>
					<Row>
						<Col lg={6} md={6}>
							<div className={styles.num}>
								<h1>
									#
									<b>1</b>
								</h1>
							</div>
						</Col>
						<Col lg={6} md={6}>
							<div className={styles.content}>
								<SectionTitle lgTitle="Pizzeola in NY" smTitle="Trending"/>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptate alias labore, fugit, dicta expedita?</p>
							</div>
						</Col>
					</Row>
				</Container>
			</Section>
		</div>
	);
}