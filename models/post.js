module.exports = function(sequelize, DataTypes) {
  let Post = sequelize.define("Post", {
    unique_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },{
    freezeTableName: true,
    tableName: "Post"
  });
  return Post;
};