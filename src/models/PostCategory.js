/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategoryModel = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'posts_categories'
  })

  PostCategoryModel.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      through: PostCategoryModel,
      foreignKey: "postId",
      as: "categories",
    });
    Category.belongsToMany(BlogPost, {
      through: PostCategoryModel,
      foreignKey: "categoryId",
      as: "posts",
    });
  }

  return PostCategoryModel;

};