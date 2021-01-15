import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {Container, Row, Col} from 'react-bootstrap';

// components
import HamburgNav from './hamburgNav/hamburgNav';
import Navigation from './navigation/navigation';
import MiniCart from './miniCart/miniCart';
import {SvgShoppingBag} from '../svgCatalog';

// styles
import styles from '../../styles/header.module.css';


export default function Header () {

	const [headerClass, setHeaderClass] = useState('headerArea');
	const [cartClass, setCartClass] = useState('hideContent');
	

	useEffect(() => {

		window.addEventListener('scroll', () => {
			toStickHeader(window.pageYOffset);
		});

	});

	function toStickHeader(pageOffset) {

		if (pageOffset > 20) {
			setHeaderClass('fixedHeaderArea');
		} else {
			setHeaderClass('headerArea');
		}

	}

	function toggleDisplay() {

		if (cartClass === 'hideContent') {
			setCartClass('showContent');
		} else {
			setCartClass('hideContent');
		}

	}
	
	return (
		<div className={styles[headerClass]}>
			<Container fluid>
				<Row>

					<Col lg={2} md={12}>
						<HamburgNav/>
						<div className={styles.logo}>
							<Link href="/">
								<a>Pizze<b>o</b>la</a>
							</Link>
						</div>
					</Col>

					<Col lg={8} md={0}>
						<Navigation type="Horizontal"/>
					</Col>

					<Col className="text-right" lg={2} md={12}>
						<div className={styles.cartContact}>

							<button onClick={toggleDisplay} className={styles.toggleBtn}> 
								<span className={styles.cartCount}>2</span>
								&nbsp;
								<SvgShoppingBag/>
							</button>

							<div className={`${styles.content} ${styles[cartClass]}`}>
								<div className={styles.items}>
									<MiniCart/>
									<MiniCart/>
								</div>
								<div className={styles.action}>
									<span className={styles.price}><b>Total</b>$55.10</span>
									<Link href="/checkout">
										<a className={styles.viewBtn}>Checkout</a>
									</Link>	
								</div>
							</div>

							<Link href="/menu">
								<a className={styles.boxedBtn}>Order Online</a>
							</Link>
							
						</div>
					</Col>

				</Row>
			</Container>
		</div>
	); 
}