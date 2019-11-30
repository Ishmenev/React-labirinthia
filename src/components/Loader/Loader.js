import React, { Component } from 'react';

import styles from './Loader.module.scss';

export default class Loader extends Component {
    constructor(props){
        super(props);
    }


    render() {

        return (
            <div className={styles.block}></div>
        );
    }
}