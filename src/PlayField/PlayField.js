import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container, Row } from "reactstrap";

import "./play-field.css";

import Dealer from "./Dealer/Dealer";
import Deck from "./Deck/Deck";
import Player from "./Player/Player";
import Badge from "./Badge/Badge";

export default class PlayField extends Component {
  render() {
    const player = this.props.player;
    const dealer = this.props.dealer;
    const index = player.handIndex;
    return (
      <Container className="PlayField_main">
        <Row>
          <Badge
            player={{
              name: dealer.name,
              avatar: dealer.avatar,
              score: dealer.score
            }}
            dealer={true}
            flipped={!this.props.turn.playersTurn}
          />
          <Dealer hand={dealer.hand} flipped={!this.props.turn.playersTurn} />
        </Row>
        <Row>
          <Deck />{" "}
          {/* Really just an image I guess.  Maybe add some animation... */}
        </Row>
        <Row>
          <Player hands={player.hands} status={player.status[index]} />
          <Badge
            player={{
              name: player.name,
              avatar: player.avatar,
              score: player.score[index],
              balance: player.balance,
              currentBet: player.currentBet
            }}
            isPlaying={this.props.turn.isPlaying}
            buyChips={this.props.buyChips}
            setBet={this.props.setBet}
            dealer={false}
            flipped={true}
          />
        </Row>
      </Container>
    );
  }
}

PlayField.propTypes = {
  player: PropTypes.object.isRequired,
  dealer: PropTypes.object.isRequired,
  deck: PropTypes.object.isRequired,
  turn: PropTypes.object.isRequired
};
