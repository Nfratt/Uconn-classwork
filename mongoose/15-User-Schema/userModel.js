const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  /* TODO:
   * Add four entries into our schema. These should be:
   *

   * 1: username: A string that will be be required, and also trimmed.
  
   * 2: password: A string that will be required, trimmed, and at least 6 characters.
   * 3: email: A string that must be a valid email address and unique in our collection.
   * 4: userCreated: A date that will default to the current date.
   *
   * TIP: The regex for checking if a string is an email is: /.+\@.+\..+/
   * Use that with the model attribute that checks for a valid match.
   * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */
  username: {
    type: String,
    trim: true,
    required: 'username is Required',
  },
  email: {
    unique: true,
    required: true,
    type: String,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate: [
      // Function takes in the new `longstring` value to be saved as an argument
      function (input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 6;
      },
      // Error Message
      'password should be longer.',
    ],
    userCreated: {
      type: Date,
      default: Date.now,
    }

  }

});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;
