import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    inputFilterName: '',
    rarityFilter: 'todas',
    superFilter: false,
    cardColor: 'green',
  };

  changeCardColor = () => {
    const { cardRare } = this.state;
    let color = null;
    switch (cardRare) {
    case 'raro':
      color = 'blue';
      break;
    case 'muito raro':
      color = 'red';
      break;
    default:
      color = 'green';
      break;
    }
    this.setState({ cardColor: color });
  };

  validateAttributes = (arrOfAttributes) => {
    const attributesSum = arrOfAttributes
      .reduce((sum, elem) => Number(sum) + Number(elem));
    const sumLimit = 210;
    const validSum = attributesSum <= sumLimit;
    const attributeMaxLimit = 90;
    const attributesAreValid = arrOfAttributes
      .every((element) => element >= 0 && element <= attributeMaxLimit);
    return (validSum && attributesAreValid);
  };

  validateForm = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    let textFieldsNotEmpty = false;
    if (cardName && cardImage && cardDescription) {
      textFieldsNotEmpty = true;
    }
    const attributes = [cardAttr1, cardAttr2, cardAttr3];
    const attributesValid = this.validateAttributes(attributes);

    if (textFieldsNotEmpty && attributesValid) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateForm();
        this.changeCardColor();
      },

    );
  };

  resetForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      cardColor: 'green',
    });
  };

  deleteCard = ({ target }) => {
    // referencia para tirar item do array: https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array
    const { name } = target;
    const { savedCards } = this.state;
    const arraywithCardRemove = savedCards.filter((card) => card.cardName !== name);
    this.setState({
      savedCards: arraywithCardRemove,
    }, this.checkTrunfo);
  };

  checkTrunfo = () => {
    const { savedCards } = this.state;
    const deckHasTrunfo = savedCards.some((card) => card.cardTrunfo === true);
    if (deckHasTrunfo) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCards,
      cardColor,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardColor,
    };
    // push into state array: https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array
    this.setState({
      savedCards: [...savedCards, card],
    }, () => {
      this.resetForm();
      this.checkTrunfo();
    });
  };

  render() {
    const {
      inputFilterName,
      savedCards,
      rarityFilter,
      superFilter,
    } = this.state;

    return (
      <main>
        <h1>Tryunfo</h1>
        <div className="card-creation-container">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <section className="preview">
            <h2>Preview</h2>
            <Card { ...this.state } />
          </section>
        </div>
        <Filter
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
        <section className="deck-section">
          <h2 className="deck-title">Deck</h2>
          <div className="deck-container">
            {
              savedCards
                .filter((card) => {
                  const { cardName, cardRare, cardTrunfo } = card;
                  if (superFilter) {
                    return cardTrunfo;
                  }
                  if (rarityFilter === 'todas') {
                    return cardName.includes(inputFilterName);
                  }
                  return cardName.includes(inputFilterName) && cardRare === rarityFilter;
                })
                .map((element) => (
                  <div key={ uuidv4() } className="deck-card">
                    <Card { ...element } />
                    <button
                      name={ element.cardName }
                      type="button"
                      onClick={ this.deleteCard }
                      data-testid="delete-button"
                      className="delete"
                    >
                      Excluir
                    </button>
                  </div>
                ))
            }
          </div>
        </section>
      </main>
    );
  }
}

export default App;
