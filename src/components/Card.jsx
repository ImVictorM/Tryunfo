import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileSignature,
  faHeart, faShield,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';

class Card extends Component {
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
      cardColor,
    } = this.props;

    return (
      <section className={ `card ${cardColor}` }>
        <h2 data-testid="name-card">
          <div>
            <FontAwesomeIcon icon={ faFileSignature } />
          </div>
          <div>{cardName}</div>
        </h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card" className="description">{cardDescription}</p>
        <p data-testid="attr1-card" className="attribute">
          <span><FontAwesomeIcon icon={ faHeart } /></span>
          {cardAttr1}
        </p>
        <p data-testid="attr2-card" className="attribute">
          <span><FontAwesomeIcon icon={ faWandMagicSparkles } /></span>
          {cardAttr2}
        </p>
        <p data-testid="attr3-card" className="attribute">
          <span><FontAwesomeIcon icon={ faShield } /></span>
          {cardAttr3}
        </p>
        <div className="rarity-stats">
          <p data-testid="rare-card">{cardRare}</p>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardColor: PropTypes.string.isRequired,
};

export default Card;
