// Requiring our CastMember class function we exported from castMember.js
const CastMember = require('./castMember');

/**
 * Creates a movie object
 */
class Movie {
/**
 *
 * @param {string} movieName What's it called?
 * @param {string} genre horror | romance | action
 * @param {string} budget '63 million', 'shoestring'
 */
  constructor(movieName, genre, budget) {
    // this.cast will hold all of our CastMember objects
    this.cast = [];
    this.movieName = movieName;
    this.genre = genre;
    this.budget = budget;
  }

  /**
   *
   * @param {string} gender male | female
   * @param {string} name Name of actor playing the role
   * @param {string} role Name of character the actor will be playing
   */
  addCastMember(gender, name, role) {
    this.cast.push(new CastMember(gender, name, role));
  };
}


// Exporting the Movie class which we will use in main.js
module.exports = Movie;
