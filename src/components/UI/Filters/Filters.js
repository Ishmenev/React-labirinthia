import React, { Component } from 'react';
import styles from './Filters.module.scss';

const filterButtons = [
  {name: 'all', label: 'Все'},
  {name: 'creative', label: 'Пользовательские'},
  {name: 'narrative', label: 'Сюжетные'},
]

const Filters = ({filter, onFilter}) => {

  const buttonItem = filterButtons.map((item) => {
  
    return (
      <button type='button'
      className={styles.options__filter}
      onClick={() => onFilter(item.name)}>
        {item.label}
      </button>
    )})

  return (
      <div className={styles.options__filters}>
        {buttonItem}
      </div>
  )

}

export default Filters;