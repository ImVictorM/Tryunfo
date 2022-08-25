import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;

    return (
      <label htmlFor="super-check" className="checkbox-label">
        Super Trunfo
        <input
          name="cardTrunfo"
          defaultChecked={ cardTrunfo }
          value={ cardTrunfo }
          onChange={ onInputChange }
          id="super-check"
          type="checkbox"
          data-testid="trunfo-input"
          className="checkbox-input"
        />
      </label>
    );
  }
}

SuperTrunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SuperTrunfo;
