module.exports = function(sequelize, DataTypes) {
  const Author = sequelize.define('Post', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160],
      },
    },

  });
  return Author;
};
