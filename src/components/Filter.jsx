import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onInputChange, inputFilterName } = this.props;
    return (
      <section>
        <h3>Filtro de busca</h3>
        <label htmlFor="name">
          Nome:
          <input
            name="inputFilterName"
            type="text"
            value={ inputFilterName }
            data-testid="name-filter"
            onChange={ onInputChange }
          />
        </label>
      </section>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  inputFilterName: PropTypes.string.isRequired,
};

export default Filter;
