import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

// components
import SectionTitle from '../sectionTitle';
import Section from '../section';
import MenuItem from './menuItem/menuItem';

// styles
import styles from '../../styles/menu.module.css';




export default function Menu({rowsLimit, withTitle}) {

	function renderRows(items) {

		const rows = [];
		let rowCount = Math.ceil(items.length / 3);
		if (rowsLimit) {
			rowCount = rowsLimit;
		}

		for(let i = 0; i < rowCount; i++) {
			rows.push(
				<Row>
					{
						renderCols(items, i)
					}
				</Row>
			);
		}

		return rows;
	}

	function renderCols(items, i) {

		const cols = [];
		let item = i * 3;
		const lastItem = 3 + item;

		while (item < lastItem) {
			if (items[item] !== undefined) {
				cols.push(
					<Col lg={4} md={4}>
						<MenuItem item={items[item]}/>
					</Col>
				);
			}
			item++;
		}

		return cols;
	}

	const title = (
		<Row>
			<Col lg={12} className="text-center">
				<SectionTitle lgTitle="Choose Yours" smTitle="Pizza Time"/>
			</Col>
		</Row>
	);

	return(
		<div className={styles.menu}>
			<Section>
				<Container>
					{withTitle ? title: null}
					{renderRows(items)}
				</Container>
			</Section>
		</div>
	);

}

Menu.propTypes = {
	rowsLimit: PropTypes.number,
	title: PropTypes.bool,
	withTitle: PropTypes.bool
};

// temporary data
const items = [
	{
		id: 1,
		name: 'Classic Cheese',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, numquam.',
		price: 18,
		background: './pizza-menu-1.jpg'
	},
	{
		id: 2,
		name: 'Vegetable & Mozzarella',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, numquam.',
		price: 22,
		background: './pizza-menu-2.jpg'
	},
	{
		id: 3,
		name: 'Napelotana',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, numquam.',
		price: 26,
		background: './pizza-menu-3.jpg'
	},
	{
		id: 4,
		name: 'Mushroom Mixed',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, numquam.',
		price: 14,
		background: './pizza-menu-4.jpg'
	},
	{
		id: 5,
		name: 'Green & Peppers',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, numquam.',
		price: 16,
		background: './pizza-menu-5.jpg'
	},
	{
		id: 6,
		name: 'Sicilian Pizza',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, numquam.',
		price: 30,
		background: './pizza-menu-6.jpg'
	}
];