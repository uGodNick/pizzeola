import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Section from '../section';
import SectionTitle from '../sectionTitle';
import TeamItem from './teamItem/teamItem';

export default function Team() {
	return(
		<Section>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle lgTitle="Expert Staff" smTitle="Team"/>
					</Col>
				</Row>
				<Row>
					{
						data.map((item, index) => {
							return (
								<Col lg={4} md={6} sm={12} key={index}>
									<TeamItem  person={item}/>
								</Col>
							);
						})
					}
				</Row>
			</Container>
		</Section>
	);
}

// temporary data

const data = [
	{
		fullName: 'Natasha Rose',
		position: 'Pizza Specialist',
		photo: '/team-2.jpg'
	},
	{
		fullName: 'Michael Stork',
		position: 'Main Chef',
		photo: '/team-1.jpg'
	},
	{
		fullName: 'Jenny Sofia',
		position: 'Pizza Specialist',
		photo: '/team-3.jpg'
	}

];