module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        len: [1, 160],
      },
    },
    body: {
      type: DataTypes.TEXT,
      validate: {
        notNull: false,
        len: [1],
      },
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        defaultValue: 'Personal',
      },
    },
  });
  return Post;
};
// this style allows you to use mutiple tabels
