import React, { Component } from 'react';
import styles from './Filters.module.scss';

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterButtons: [
        {name: 'all', label: 'Все'},
        {name: 'creative', label: 'Пользовательские'},
        {name: 'narrative', label: 'Сюжетные'},
      ]
    }
  }

  render() {
    const {filterButtons} = this.state;
    const {onFilter} = this.props;

    return (
        <ul className={styles.options__filters}>
          <li>
            {filterButtons.map((button) => (
            <button type='button'
            className={styles.options__filter}
            onClick={() => onFilter(button.name)}
            >{button.label}</button>
            ))}
          </li>
        </ul>
    )
  }
}