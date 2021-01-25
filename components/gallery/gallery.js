import React, {useState ,useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

// components
import SectionTitle from '../sectionTitle';
import Section from '../section';
import GalleryItem from './galleryItem/galleryItem';

// styles
import styles from '../../styles/gallery.module.css';

export default function Gallery({rowLimit}) {

	const [listWidth, updateListWidth] = useState(0);
	const [listHeight, updateListHeight] = useState(0);

	useEffect(() => {
		const photoList = document.querySelector(`.${styles.list}`);

		updateListWidth(
			photoList.offsetWidth
		);

		photoList.style.height = `${listHeight}px`;

	});

	function renderPhotos(items) {
		const photos = [];

		let offset = listWidth * 0.19,
			indent = listWidth * 0.01,
			item = 0,		
			row = 0,
			skipedCol = [],
			delayedEl = [],
			totalCols = 0;

		for (let i = 0; i < items.length; i++) {
			if (items[i].size === 'large') {
				totalCols += 4;
			} else if(items[i].size === 'wide') {
				totalCols += 2;
			} else {
				totalCols += 1;
			}
		}

		let totalRows = Math.ceil(totalCols / 5);

		if (rowLimit) {
			totalRows = rowLimit;
		}

		if (listHeight === 0) {
			updateListHeight(totalRows * 320);
		}

		while(row < totalRows) {
			
			let col = 0;

			while (col < 5) {

				if (skipedCol.includes(col)) {
					col++;
					skipedCol.shift();
					continue;
				}
				
				let leftOffset = col * (offset + indent),
					topOffset = row * 320,
					itemObj = items[item],
					delayedObj = null;

				if (col === 0) {
					leftOffset = 0;
				}

				if (delayedEl.length !== 0 && !(col > 3) && !(skipedCol.includes(col + 1))) {
					delayedObj = delayedEl[0];
					itemObj = items[delayedEl.shift()];
				}
				
				if (!itemObj) {
					break;
				}

				if (itemObj.size === 'wide') {
					if (col > 3 || skipedCol.includes(col + 1)) {
						delayedEl.push(item);
						item++;
						continue;
					} else {
						col++;
					}
				}

				if (itemObj.size === 'large') {
					if (col > 3 || skipedCol.includes(col + 1)) {
						delayedEl.push(item);
						item++;
						continue;
					} else {
						skipedCol.push(col);
						col++;
						skipedCol.push(col);
					}
				}

				if (item === items.length && delayedObj === null) {
					break;
				}
				
				let id = delayedObj !== null ? delayedObj : item;

				photos.push(
					<GalleryItem id={id} key={id} item={itemObj} position={{top: topOffset, left: leftOffset}}/>
				);
				
				if (delayedObj == null) {
					item++;
				}
				col++;
			}

		row++;
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

Gallery.propTypes = {
	rowLimit: PropTypes.number
};

// temporary data

const items = [
	{
		background: '/gallery-pizza-1.jpg',
		size: 'normal'
	},
	{
		background: '/gallery-pizza-2.jpg',
		size: 'large'
	},
	{
		background: '/gallery-pizza-3.jpg',
		size: 'normal'
	},
	{
		background: '/gallery-pizza-4.jpg',
		size: 'wide'
	},
	{
		background: '/gallery-pizza-5.jpg',
		size: 'normal'
	},
	{
		background: '/gallery-pizza-6.jpg',
		size: 'normal'
	},
	{
		background: '/gallery-pizza-7.jpg',
		size: 'normal'
	},
	{
		background: '/gallery-pizza-8.jpg',
		size: 'normal'
	},
	{
		background: '/gallery-pizza-9.jpg',
		size: 'normal'
	}
];