import React, { Component } from 'react';

import Head from 'next/head';

// components
import Spinner from '../components/spinner';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import AboutUs from '../components/aboutUs/aboutUs';
import Menu from '../components/menu/menu';
import CTA from '../components/CTA/CTA';
import Gallery from '../components/gallery/gallery';
import Testimonial from '../components/testimonial/testimonial';
import Ranking from '../components/ranking/ranking';
import Blog from '../components/blog/blog';
import Location from '../components/location/location';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import ToTopBtn from '../components/toTopBtn';


export default class Home extends Component {

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
					<title> Pizzeola | Home </title>
					<link rel="shortcut icon" href="/favicon.svg" />
				</Head>

				{spinner}

				<Header/>
	
				<Hero/>
	
				<AboutUs/>
				
				<Menu rowsLimit={1} withTitle/>
	
				<CTA/>
	
				<Gallery rowLimit={{mobile: 6, desktop: 2}} withTitle/>
	
				<Testimonial/>
	
				<Ranking/>
	
				<Blog itemLimit={3} onHomePage/>
	
				<Location color={'black'}/>
	
				<Contact withTitle/>
	
				<Footer/>
	
				<ToTopBtn/>
			</div>
		);
	}
	
}