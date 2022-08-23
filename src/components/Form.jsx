import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            type="text"
            placeholder="nome-da-carta"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attribute-1">
          Atributo 1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attribute-1"
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attribute-2">
          Atributo 2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attribute-2"
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attribute-3">
          Atributo 3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attribute-3"
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            id="image"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            id="rarity"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="super-check">
          Super Trunfo
          <input
            checked
            value={ cardTrunfo }
            onChange={ onInputChange }
            id="super-check"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>

        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
