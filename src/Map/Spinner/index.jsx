import React from 'react';
import loader from './spinner.gif';
import styles from './index.module.sass';

const Spinner = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt="loader" />
        </div>
    );
};

export default Spinner;
