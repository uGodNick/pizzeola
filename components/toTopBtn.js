import React, {useEffect} from 'react';

// styles
import styles from '../styles/toTopBtn.module.css';

export default function ToTopBtn() {


	useEffect(() => {
		
		const clientHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
		
		const btn = document.querySelector(`.${styles.btn}`);

		window.addEventListener('scroll', () => {
			const windowHeight = document.documentElement.clientHeight;
			toggleDisplay(window.pageYOffset + windowHeight, clientHeight, btn);
		});

	});

	function toggleDisplay(pageYOffset, pageY, btn) {

		if(pageY - pageYOffset < pageY * 0.15) {
			btn.style.display = 'block';
		} else {
			btn.style.display = 'none';
		}
	}


	return(
		<a href="#top" className={styles.btn}>
			◤
		</a>
	);
}