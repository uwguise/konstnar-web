import React, { PropTypes } from 'react'
import * as I from 'immutable'
import Select from 'react-select'
import Styles from './styles.scss'

const noop = () => {}

const Searchbar = ({
  suggestions,
  onUpdate = noop,
  onSearch = noop,
  isSearching = false,
}) => {
  return (
    <div className={Styles.searchbar}>
      <Select
        isLoading={isSearching}
        onChange={({ value }) => onSearch(value)}
        options={suggestions.map(createOption).toJS()}
        onInputChange={onUpdate}/>
    </div>
  )
}

function createOption(suggestion) {
  return {
    value: suggestion,
    label: suggestion,
  }
}

Searchbar.propTypes = {
  suggestions: PropTypes.instanceOf(I.List).isRequired,
  onUpdate: PropTypes.func,
  onSearch: PropTypes.func,
  isSearching: PropTypes.bool,
}

export default Searchbar
