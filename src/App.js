import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

// passar multiplas props: https://www.youtube.com/watch?v=aWWIqdCc4GA

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
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

  onSaveButtonClick = () => {

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
