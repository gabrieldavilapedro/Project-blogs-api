/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

module.exports = (sequelize, DataTypes) => {
  const blogPostModel = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    underscored: true,
    timestamps: false
  })

  blogPostModel.associate = ({ User }) => {
    blogPostModel.belongsTo(User, {
      foreignKey: "userId",
      as: "user",
    });
  }

  return blogPostModel;
}



