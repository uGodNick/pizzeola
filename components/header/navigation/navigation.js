import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

//styles
import styles from '../../../styles/navigation.module.css';

export default function Nav({type}) {
	
	//type horizontal or vertical
	const navType = `nav${type}`;

	return (
		<div className={`${styles[navType]}`}>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href="/menu">
						<a>Menu</a>
					</Link>
				</li>
				<li>
					<Link href="/gallery">
						<a>Gallery</a>
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}

Nav.propTypes = {
	type: PropTypes.string
};