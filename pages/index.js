import React from 'react';

import Head from 'next/head';


import Spinner from '../components/spinner';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import AboutUs from '../components/aboutUs/aboutUs';
import Menu from '../components/menu/menu';
import CTA from '../components/CTA/CTA';


export default function Home() {
	return (
		<>
			<Head>
				<title> Pizzeola </title>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			{/* <Spinner/> */}
			<Header/>

			<Hero/>

			<AboutUs/>
			
			<Menu rowsLimit={1} title/>

			<CTA/>
		</>
	);
}