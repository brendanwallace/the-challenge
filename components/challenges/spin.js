// Spin challenge

// Identity challenge
import DefaultChallenge from './default.js';

export default class Spin extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Spin";
    this.challengeTimes = [90, 120, 180];
    this.rules = [
      "In turn, each player must spin a coin on the table, take a sip from " +
      "their drink while it’s still spinning, and then pick the coin up cleanly " +
      "between their pointer and middle fingers of one hand (making a gesture " +
      "like cutting scissors).\n" +
      "If any player fails, the whole group must start over. You may, however, " +
      "order the players however you like.",
      "Spin 2", "Spin 3",
    ];
  }
}
