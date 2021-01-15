import React, {useState} from 'react';

//components
import Navigation from '../navigation/navigation';

//styles
import styles from '../../../styles/hamburgNav.module.css';

export default function HamburgNav() {

	const [navClass, setNavClass] = useState('hideContent');

	function toggleDisplay() {
		if (navClass === 'showContent') {
			setNavClass('hideContent');
		} else {
			setNavClass('showContent');
		}
	}

	return(
		<div className={styles.hamburgNav}>
			<button onClick={toggleDisplay} className={styles.navIcon}>
				<span className={styles.iconBar}></span>
				<span className={styles.iconBar}></span>
				<span className={styles.iconBar}></span>
			</button>
			<div className={styles[navClass]}>
				<Navigation type="Vertical"/>
			</div>
			
		</div>
	);
}