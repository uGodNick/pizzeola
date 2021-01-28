import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// components
import TestimonialItem from './testimonialtem/testimonialItem'; 
import Section from '../section';

// styles
import styles from '../../styles/testimonial.module.css';


export default class Testimonial extends Component {

	state = {
		carouselParams: {}
	}

	componentDidMount() {
		const items = document.querySelectorAll(`.${styles.item}`),
			  stage = document.querySelector(`.${styles.stage}`),
			  carousel = document.querySelector(`.${styles.carousel}`);

		this.setState({
			carouselParams: {
				items: items,
				stage: stage,
				carousel: carousel
			}
		});

		//swipe event listener

		let xDown = null,
			xUp = null,
			xDiff,
			offset = 0,
			offsetLastItem = (carousel.offsetWidth + 40) * (items.length - 1);
		
		stage.addEventListener('mousedown', (e) => {

			if (e.which == 1) {
				xDown = e.clientX;

				stage.style.transition = 'all 0s ease 0s';
				carousel.style.cursor = 'grab';

				window.addEventListener('mouseup', () => {
					xDown = null;

					stage.style.transition = 'all 0.25s ease 0s';
					carousel.style.cursor = 'auto';
					
					//left swipe
					if (xDiff > 35 && offset !== offsetLastItem) {
						offset += (carousel.offsetWidth + 40);
					}

					//right swipe
					if (xDiff < 35 && offset !== 0) {
						offset -= (carousel.offsetWidth + 40);
					}

					stage.style.transform = `translate3d(${-offset}px, 0, 0)`;
			}, {once: true});
			}
		});

		stage.addEventListener('mousemove', (e) => {

			if (!xDown) {
				return;
			}

			xUp = e.clientX;
			xDiff = xDown - xUp;

			let translate = offset + xDiff,
				slowTranslate = offset + xDiff / 5;

			if ((offset === 0 && xDiff < 0) || (offset === offsetLastItem && xDiff > 0)) {
				translate = slowTranslate;
			}

			stage.style.transform = `translate3d(${-translate}px, 0, 0)`;

		});

	}

	componentDidUpdate() {
		this.setResponsiveSize();
	}

	setResponsiveSize() {

		const {items, stage, carousel} = this.state.carouselParams;

		stage.style.width = `${(carousel.offsetWidth + 40) * items.length}px`;

		for(let i = 0; i < items.length; i++) {
			items[i].style.width = `${carousel.offsetWidth}px`;
		}
	}

	
	render() {
		return(
			<div className={styles.testimonial}>
				<Section>
					<Container>
						<Row className="justify-content-center">
							<Col lg={7} md={7} sm={7}>
								<div className={styles.carousel}>
									<div className={styles.stage}>
										{
											data.map((item, i) => {
												return(
													<div key={i} className={styles.item}>
														<TestimonialItem review={item}/>
													</div>
												);
												
											})
										}
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</Section>
			</div>
		);
	}
		
}

// temporary data

const data = [
	{
		author: 'Gloria Trillo',
		mark: 5,
		comment: 'Best Italian pizza I ever had. very cozy atmosphare, fast service and yummy desert.'
	},
	{
		author: 'Иван Иванов',
		mark: 5,
		comment: 'Очень хорошая пиццерия. Было приятно здесь побывать'
	},
	{
		author: 'Gloria Trillo',
		mark: 5,
		comment: 'Best Italian pizza I ever had. very cozy atmosphare, fast service and yummy desert.'
	}
]; 