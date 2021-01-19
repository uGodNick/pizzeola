import React, {Component} from 'react';

//components
import Slide from './slide/slide';

//styles
import styles from '../../styles/hero.module.css';

//temporary data
const arr = [
	{
		id: 1,
		advantage:	'Italian Passion',
		image: '/pizza-bg-1.jpg'
	},
	{
		id: 2,
		advantage: 'Right Ingredient',
		image: '/pizza-bg-2.jpg'
	},
	{
		id: 3,
		advantage: 'Great love',
		image: '/pizza-bg-3.jpg'
	}

];

export default class Hero extends Component {

    state = {
		currentSlide: 1
	}

	updateSlide(slide){
        this.setState({
            currentSlide: slide
        });
    }

	componentDidMount() {
		const documentWidth = document.documentElement.clientWidth,
			  slides = document.querySelectorAll(`.${styles.item}`),
			  stage = document.querySelector(`.${styles.stage}`),
			  nextBtn = document.querySelector(`.${styles.nextBtn}`),
			  prevBtn = document.querySelector(`.${styles.prevBtn}`);
		
		const carouselParams =  {
			documentWidth: documentWidth,
			slides: slides,
			stage: stage,
			nextBtn: nextBtn,
			prevBtn: prevBtn,
			overallWidth: slides.length * documentWidth,
			slideCount: slides.length				
		};

		setInterval(this.autoTranslateSlide, 5000, carouselParams);

		nextBtn.addEventListener('click', () => this.nextSlide(carouselParams));
		prevBtn.addEventListener('click', () => this.prevSlide(carouselParams));

		this.setResponsiveSize(carouselParams);
	}

	setResponsiveSize(params) {

		const {slides, slideCount, documentWidth, overallWidth, stage} = params;

		for (let i = 0; i < slideCount; i++) {
			slides[i].style.width = `${documentWidth}px`;
			slides[i].style.backgroundImage = `url(${arr[i].image})`;
		}

		stage.style.width = `${overallWidth}px`;
	}

	nextSlide(params) {

		const {stage, documentWidth, slideCount} = params,
			  {currentSlide} = this.state;

		let offset = documentWidth * currentSlide;
		
		if (currentSlide === slideCount) {
			offset = 0;
			this.updateSlide(1);
		} else {
			this.updateSlide(currentSlide + 1);
		}
		stage.style.transform = `translate3d(${-offset}px, 0, 0)`;
	}

	prevSlide(params) {

		const {stage, documentWidth, slideCount} = params,
			  {currentSlide} = this.state;

		let offset = documentWidth * (currentSlide - 2);

		switch(currentSlide) {
			case 1:
				offset = (slideCount - 1) * documentWidth;
				this.updateSlide(slideCount);
				break;
			case 2:
				offset = 0;
				this.updateSlide(currentSlide - 1);
				break;
			default:
				this.updateSlide(currentSlide - 1);
				break;
		}
		
		stage.style.transform = `translate3d(${-offset}px, 0, 0)`;
	}

	autoTranslateSlide = (params) => {

		const {stage, documentWidth, slideCount} = params;
		const {currentSlide} = this.state;
		let offset;
		currentSlide === slideCount ? offset = 0 : offset = currentSlide * documentWidth;
		
		stage.style.transform = `translate3d(${-offset}px, 0, 0)`;
		currentSlide === (slideCount) ? this.updateSlide(1) : this.updateSlide(currentSlide + 1);

	}

	render() {
		return (
			<div className={styles.carousel}>
				<div className={styles.stage}>
					{
						arr.map(item => {
							return (
								<div key={item.id} className={styles.item}>
									<Slide advantage={item.advantage}/>
								</div>
							);
						})
					}
				</div>
				<div className={styles.nav}>
					<button className={styles.prevBtn}>
						<i className={styles.arrowIcon}></i>
					</button>
					<button className={styles.nextBtn}>
						<i className={styles.arrowIcon}></i>
					</button>
				</div>
			</div>
		);
	}
	
}

