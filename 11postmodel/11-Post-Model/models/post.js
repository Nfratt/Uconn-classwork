module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {

        len: [1, 160],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    category: {
      type: DataTypes.STRING,

      defaultValue: 'Personal',
    },
  });
  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false,
      },
    });
  };



  return Post;
};
// this style allows you to use mutiple tabels
