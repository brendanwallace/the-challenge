// Finesse challenge

// Identity challenge
import DefaultChallenge from './default.js';

export default class Finesse extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Finesse";
    this.challengeTime = 120;
    this.rules = [
      ("In turn, each player must spin a coin on the "
      + "table, take a sip from their drink while it’s still spinning, and then "
      + "pick the coin up cleanly between their pointer and middle fingers of one "
      + "hand (making a gesture like cutting scissors).  If any player fails, the "
      + "whole group must start over. (You may order the players however you "
      + "like.)"),
      "Finesse 2", "Finesse 3",
    ];
  }
}
