import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// components
import Section from '../section';
import SectionTitle from '../sectionTitle';

// styles
import styles from '../../styles/contact.module.css';

const MyMapComponent = compose(
	withProps({
	  googleMapURL: 'https://maps.google.com/maps/api/js?sensor=false',
	  loadingElement: <div style={{ height: '100%' }} />,
	  containerElement: <div style={{ height: '400px' }} />,
	  mapElement: <div style={{ height: '100%' }} />,
	}),
	withScriptjs,
	withGoogleMap
  )((props) =>
	<GoogleMap
	  defaultZoom={14}
	  defaultCenter={{ lat: 40.72274497900157, lng: -73.99620323490628 }}
	>
	  {props.isMarkerShown && <Marker position={{ lat: 40.72274497900157, lng: -73.99620323490628 }} />}
	</GoogleMap>
  );	

export default function Contact() {
	return(
		<Section>
			<Container>
				<Row>
					<Col>
						<SectionTitle lgTitle="Contact" smTitle="Let's talk"/>
					</Col>
				</Row>
				<Row>
					<Col lg={6} md={6}>
						<div className={styles.contactForm}>
							<form>
								<input type="text" placeholder="Name"/>
								<input type="email" placeholder="Email"/>
								<input type="tel" placeholder="Phone"/>
								<textarea name="Message" placeholder="Message" cols="30" rows="10"></textarea>
								<input type="submit" value="Submit"/>
							</form>
						</div>
					</Col>
					<Col lg={6} md={6}>
						<div className={styles.map}>
							<MyMapComponent isMarkerShown />
						</div>
					</Col>
				</Row>
			</Container>
		</Section>
	);
}