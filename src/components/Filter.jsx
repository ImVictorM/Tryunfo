import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onInputChange, inputFilterName, rarityFilter, superFilter } = this.props;
    return (
      <section className="filter-container">
        <h3>Filtro de busca</h3>
        <div className="filter-inputs-container">
          <label htmlFor="inputFilterName" className="input-label">
            Nome:
            <input
              id="inputFilterName"
              name="inputFilterName"
              type="text"
              value={ inputFilterName }
              data-testid="name-filter"
              onChange={ onInputChange }
              disabled={ superFilter }
              className="form-input"
              placeholder="nome-da-carta"
            />
          </label>
          <label htmlFor="rarity-filter" className="input-label">
            Raridade:
            <select
              name="rarityFilter"
              value={ rarityFilter }
              data-testid="rare-filter"
              id="rarity-filter"
              onChange={ onInputChange }
              disabled={ superFilter }
              className="form-input"
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="super-filter" className="checkbox-label">
            Super Trunfo
            <input
              type="checkbox"
              name="superFilter"
              value={ superFilter }
              onChange={ onInputChange }
              id="super-filter"
              data-testid="trunfo-filter"
              className="checkbox-input"
            />
          </label>
        </div>
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
