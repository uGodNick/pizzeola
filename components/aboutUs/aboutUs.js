import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

//components
import SectionTitle from '../sectionTitle';
import Section from '../section';
import {SvgPizza, SvgVines, SvgTomato} from '../svgCatalog.js';

//styles
import styles from '../../styles/aboutUs.module.css';


export default function AboutUs() {

	return (
		<div className={styles.aboutUs}>
			<Section>
				<Container>
					<Row className="justify-content-center">
						<Col lg={6} md={6} className="text-center">
							<div className={styles.content}>
								<SectionTitle lgTitle="Best Pizza" smTitle="Authentic"/>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus aperiam, consequuntur cumque inventore necessitatibus debitis facere!</p>
								<div className={styles.sign}>
									<img src="/sign.png" width="249" height="60"></img>
								</div>
							</div>
						</Col>
						<Col lg={6} md={6}>
							<div className={styles.bg}>
								<img src="/aboutUs.jpg" width="433" height="499"></img>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={4} md={4}>
							<div className={styles.faciliy}>
								<i className={styles.icon}>
									<SvgPizza/>
								</i>
								<h4>
									Real Italian
								</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								</p>
							</div>
						</Col>
						<Col lg={4} md={4}>
							<div className={styles.faciliy}>
								<i className={styles.icon}>
									<SvgVines/>
								</i>
								<h4>
									Amazing Wines
								</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								</p>
							</div>
						</Col>
						<Col lg={4} md={4}>
							<div className={styles.faciliy}>
								<i className={styles.icon}>
									<SvgTomato/>
								</i>
								<h4>
									Salad Time
								</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</Section>
		</div>
	);


}