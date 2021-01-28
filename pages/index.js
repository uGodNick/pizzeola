import React from 'react';

import Head from 'next/head';


import Spinner from '../components/spinner';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import AboutUs from '../components/aboutUs/aboutUs';
import Menu from '../components/menu/menu';
import CTA from '../components/CTA/CTA';
import Gallery from '../components/gallery/gallery';
import Testimonial from '../components/testimonial/testimonial';
import Ranking from '../components/ranking/ranking';


export default function Home() {
	return (
		<div>
			<Head>
				<title> Pizzeola </title>
				<link rel="shortcut icon" href="/favicon.svg" />
			</Head>
			{/* <Spinner/> */}
			<Header/>

			<Hero/>

			<AboutUs/>
			
			<Menu rowsLimit={1} title/>

			<CTA/>

			<Gallery rowLimit={{mobile: 6, desktop: 2}}/>

			<Testimonial/>

			<Ranking/>
		</div>
	);
}