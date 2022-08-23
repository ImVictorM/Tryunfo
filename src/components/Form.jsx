import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            data-testid="name-input"
            type="text"
            placeholder="nome-da-carta"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attribute-1">
          Atributo 1
          <input
            id="attribute-1"
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attribute-2">
          Atributo 2
          <input
            id="attribute-2"
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attribute-3">
          Atributo 3
          <input
            id="attribute-3"
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            id="image"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
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
            id="super-check"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
