import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onInputChange, inputFilterName, rarityFilter } = this.props;
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
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </section>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  inputFilterName: PropTypes.string.isRequired,
  rarityFilter: PropTypes.string.isRequired,
};

export default Filter;
