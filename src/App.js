import React from 'react';
import Form from './components/Form';
import './App.css';

// passar multiplas props: https://www.youtube.com/watch?v=aWWIqdCc4GA

class App extends React.Component {
  render() {
    const data = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: () => {},
      onSaveButtonClick: () => {},
    };

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...data } />
      </div>
    );
  }
}

export default App;
