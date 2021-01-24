import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

// components
import SectionTitle from '../sectionTitle';
import Section from '../section';
import GalleryItem from './galleryItem/galleryItem';

// styles
import styles from '../../styles/gallery.module.css';

export default function Gallery() {

	function renderPhotos(items) {
		const photos = [];
		
		for(let i = 0; i < items.length; i++) {
			photos.push(
				<GalleryItem item={items[i]}/>
			);
		}

		return photos;
	}

	return(
		<div className={styles.gallery}>
			<Section>
				<Container>
					<SectionTitle smTitle="Delicious" lgTitle="Our Gallery"/>
					<Row>
						<Col md={12} className="text-center">
							<div className={styles.list}>
								{renderPhotos(items)}
							</div>
						</Col>
					</Row>
				</Container>
			</Section>
		</div>
	);
}

// temporary data

const items = [
	{
		id: 1,
		background: '/gallery-pizza-1.jpg',
	},
	{
		id: 2,
		background: '/gallery-pizza-2.jpg',
		size: 'large'
	},
	{
		id: 3,
		background: '/gallery-pizza-3.jpg',
		size: 'wide'
	},
	{
		id: 4,
		background: '/gallery-pizza-4.jpg'
	},
	{
		id: 5,
		background: '/gallery-pizza-5.jpg'
	},
	{
		id: 6,
		background: '/gallery-pizza-6.jpg'
	}
];