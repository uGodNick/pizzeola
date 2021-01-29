import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

// components
import Section from '../section';
import SectionTitle from '../sectionTitle';
import BlogItem from './blogItem/blogItem';

// styles
import styles from '../../styles/blog.module.css';

export default function Blog({itemLimit, onHomePage}) {

	function renderItems(data) {
		const items = [];
		
		let itemCount;
		itemLimit ? itemCount = itemLimit : itemCount = data.lenght;

		for (let i = 0; i < itemCount; i++) {
			items.push(
				<Col key={data[i].id} lg={onHomePage ? 4 : 6} md={6}>
					<BlogItem item={data[i]}/>
				</Col>
			);
		}

		return items;
	}

	return(
		<div className={styles.blog}>
			<Section>
				<Container>
					<Row className="justify-content-center">
						<SectionTitle lgTitle="Latest Post" smTitle="Journal"/>
					</Row>
					<Row>
						{renderItems(data)}
					</Row>
				</Container>
			</Section>
		</div>
	);
}

Blog.propTypes = {
	itemLimit: PropTypes.number,
	onHomePage: PropTypes.bool
};

// temporary data

const data = [
	{
		id: 1,
		date: 'January 2, 2021',
		title: 'New Italian Pizza coming this month',
		category: 'Top news',
		background: '/blog-image-1.jpg'
	},
	{
		id: 2,
		date: 'January 25, 2021',
		title: 'Amazing Pizzeola Special Dish ',
		category: 'Recipes',
		background: '/blog-image-2.jpg'
	},
	{
		id: 3,
		date: 'January 25, 2021',
		title: 'Homey Atmosphere welcomes you',
		category: 'Tips & Tricks',
		background: '/blog-image-3.jpg'
	}
];