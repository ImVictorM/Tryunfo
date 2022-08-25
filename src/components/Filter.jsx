import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onInputChange, inputFilterName, rarityFilter, superFilter } = this.props;
    return (
      <section>
        <h3>Filtro de busca</h3>
        <label htmlFor="inputFilterName">
          Nome:
          <input
            id="inputFilterName"
            name="inputFilterName"
            type="text"
            value={ inputFilterName }
            data-testid="name-filter"
            onChange={ onInputChange }
            disabled={ superFilter }
          />
        </label>
        <label htmlFor="rarity-filter">
          Raridade:
          <select
            name="rarityFilter"
            value={ rarityFilter }
            data-testid="rare-filter"
            id="rarity-filter"
            onChange={ onInputChange }
            disabled={ superFilter }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="super-filter">
          Super Trunfo
          <input
            type="checkbox"
            name="superFilter"
            value={ superFilter }
            onChange={ onInputChange }
            id="super-filter"
            data-testid="trunfo-filter"
          />
        </label>
      </section>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  inputFilterName: PropTypes.string.isRequired,
  rarityFilter: PropTypes.string.isRequired,
  superFilter: PropTypes.bool.isRequired,
};

export default Filter;
