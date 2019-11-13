module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Todo', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    category: DataTypes.STRING,
  });
  return Post;
};
// this style allows you to use mutiple tabels
