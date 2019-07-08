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
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category1: {
      type: DataTypes.STRING,
      defaultValue: "BidPrime News"
    },
    category2: {
      type: DataTypes.STRING,
      defaultValue: "BidPrime News"
    },
    category3: {
      type: DataTypes.STRING,
      defaultValue: "BidPrime News"
    },
    tag1: {
      type: DataTypes.STRING,
      defaultValue: "bidprime news"
    },
    tag2: {
      type: DataTypes.STRING,
      defaultValue: "bidprime news"
    },
    tag3: {
      type: DataTypes.STRING,
      defaultValue: "bidprime news"
    },
  },{
    freezeTableName: true,
    tableName: "Post"
  });
  return Post;
};