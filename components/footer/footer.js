import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Link from 'next/link';

// components
import Logo from '../logo';
import {SvgFacebook, SvgInstagram, SvgTwitter, SvgDribbble} from '../svgCatalog';

// styles
import styles from '../../styles/footer.module.css';

export default function Footer() {
	return(
		<footer>
			<div className={styles.footer}>
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col lg={4} md={4} xs={12}>
							<div className={styles.copyRight}>
								© 2021 Pizzeola
							</div>
						</Col>
						<Col lg={4} md={4} xs={12}>
							<div>
								<Logo/>
							</div>
						</Col>
						<Col lg={4} md={4} xs={8}>
							<div className={styles.social}>
								<Link href="/">
									<a><SvgFacebook/></a>
								</Link>
								&nbsp;
								<Link href="/">
									<a><SvgInstagram/></a>
								</Link>
								&nbsp;
								<Link href="/">
									<a><SvgTwitter/></a>
								</Link>
								&nbsp;
								<Link href="/">
									<a><SvgDribbble/></a>
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	);
}