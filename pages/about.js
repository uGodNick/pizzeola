import React, { Component } from 'react';

import Head from 'next/head';

// components
import Spinner from '../components/spinner';
import Header from '../components/header/header';
import Breadcrumb from '../components/breadcrumb';
import AboutUs from '../components/aboutUs/aboutUs';
import Testimonial from '../components/testimonial/testimonial';
import Team from '../components/team/team';
import Footer from '../components/footer/footer';


export default class AboutPage extends Component {

	state = {
		isLoading: true
	}

	componentDidMount() {
		this.setState({
			isLoading: false
		});
	}

	render() {
		let spinner;
		this.state.isLoading ? spinner = <Spinner/> : null; 

		return (
			<div>

				<Head>
					<title> Pizzeola | About </title>
					<link rel="shortcut icon" href="/favicon.svg" />
				</Head>

				{spinner}

				<Header/>

				<Breadcrumb title="About" background="./bread-bg-1.png"/>

				<AboutUs/>

				<Testimonial/>

				<Team/>

				<Footer/>

			</div>
		);
	}
}