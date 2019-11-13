module.exports = function(sequelize, DataTypes) {
  const Author = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160],
      },
    },

  });

  Author.associate = function(models) {
    Author.hasMany(models.Post, {
      onDelete: 'cascade',
    });
  };
  return Author;
};
