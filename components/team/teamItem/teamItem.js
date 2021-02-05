import React, {useState} from 'react';
import PropTypes from 'prop-types';

// styles
import styles from '../../../styles/teamItem.module.css';

export default function TeamItem ({person}) {
    const [isDisplay, toggleDisplay] = useState(false);

    const details = (
        <div className={styles.details}>
            <h6>{person.fullName}</h6>
            <span>{person.position}</span>
        </div>
    );

    return (
        <div
            onMouseEnter={() => toggleDisplay(true)}
            onMouseLeave={() => toggleDisplay(false)}
            className={styles.item}
        >
            <img src={person.photo}/>
            {isDisplay ? details: null}
        </div>
    );
}

TeamItem.propTypes = {
    person: PropTypes.object
};