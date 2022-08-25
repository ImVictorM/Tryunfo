import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SuperTrunfo from './SuperTrunfo';

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="main-form">
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name" className="input-label">
          Nome
          <input
            name="cardName"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            type="text"
            placeholder="nome-da-carta"
            className="form-input"
          />
        </label>
        <label htmlFor="description" className="input-label">
          Descrição
          <input
            name="cardDescription"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
            type="textarea"
            data-testid="description-input"
            className="form-input"
            placeholder="descrição-da-carta"
          />
        </label>
        <label htmlFor="attribute-1" className="input-label">
          Atributo 1
          <input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attribute-1"
            data-testid="attr1-input"
            type="number"
            className="form-input"
          />
        </label>
        <label htmlFor="attribute-2" className="input-label">
          Atributo 2
          <input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attribute-2"
            data-testid="attr2-input"
            type="number"
            className="form-input"
          />
        </label>
        <label htmlFor="attribute-3" className="input-label">
          Atributo 3
          <input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attribute-3"
            data-testid="attr3-input"
            type="number"
            className="form-input"
          />
        </label>
        <label htmlFor="image" className="input-label">
          Imagem
          <input
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            id="image"
            type="text"
            data-testid="image-input"
            className="form-input"
            placeholder="url-da-imagem"
          />
        </label>

        <label htmlFor="rarity" className="input-label">
          Raridade
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            id="rarity"
            data-testid="rare-input"
            className="form-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        {
          hasTrunfo
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : <SuperTrunfo cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />
        }

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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
