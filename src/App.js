import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

// passar multiplas props: https://www.youtube.com/watch?v=aWWIqdCc4GA

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
      this.validateForm,
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
    });
  };

  checkTrunfo = () => {
    const { savedCards } = this.state;
    const deckHasTrunfo = savedCards.some((card) => card.cardTrunfo === true);
    if (deckHasTrunfo) {
      this.setState({ hasTrunfo: true });
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
    };
    // push into state array: https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array
    this.setState({ savedCards: [...savedCards, card] }, () => {
      this.resetForm();
      this.checkTrunfo();
    });
  };

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
    } = this.state;

    const formData = {
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
    };

    const cardData = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...formData }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...cardData } />
      </div>
    );
  }
}

export default App;
