import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => {

  return (
    <div className={styles.block}>
      <img src={require('./img/loader.gif')} alt=""/>
    </div>
  );
}

export default Loader;