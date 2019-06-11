import React, { Component } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import cards from "./cards.json";

const shuffle = array => {
  array.sort(() => Math.random() - 0.5);
};

shuffle(cards);

class App extends Component {
  state = {
    cards,
    cardsToGo: cards.length,
    wins: 0,
    losses: 0,
    info: "click each card just once"
  };

  clickedCards = [];

  clickHandler = id => {
    shuffle(cards);
    let cardsToGo = this.state.cardsToGo;
    let wins = this.state.wins;
    let losses = this.state.losses;
    let info = this.state.info;

    cardsToGo--;

    if (this.clickedCards.includes(id)) {
      losses++;
      cardsToGo = cards.length;
      info = "YOU LOST! NEXT GAME...";
      this.clickedCards = [];
    } else {
      this.clickedCards.push(id);
    }

    if (cardsToGo === 0) {
      wins++;
      cardsToGo = cards.length;
      info = "YOU WON! NEXT GAME...";
      this.clickedCards = [];
    }

    if (cardsToGo === cards.length - 1) {
      info = "click each card just once";
    }

    this.setState({ cards, cardsToGo, wins, losses, info });
  };

  render() {
    return (
      <Container>
        <Navbar
          cardsToGo={this.state.cardsToGo}
          wins={this.state.wins}
          losses={this.state.losses}
          info={this.state.info}
        />
        {this.state.cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
            clickHandler={this.clickHandler}
          />
        ))}
      </Container>
    );
  }
}

export default App;
