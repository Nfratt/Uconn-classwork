/**
 * Creates a new castmember object
 */
class CastMember {
  /**
   *
   * @param {string} gender male | female
   * @param {string} name Name of actor playing the role
   * @param {string} role Name of character the actor will be playing
   */
  constructor(gender, name, role) {
    this.gender = gender;
    this.name = name;
    this.role = role;
  }


  /**
     * Prints out slightly different information
     * about a cast member based on their gender
     */
  readProfile() {
    let title = '';

    if (this.gender === 'female') {
      title = 'actress';
    } else {
      title = 'actor';
    }

    console.log(`
${this.name}:
   An ${title} playing the role of ${this.role}.
`);
  };
}

// Exporting our CastMember class. We will require it in movie.js
module.exports = CastMember;
