/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

module.exports = (sequelize, DataTypes) => {
  const categoryModel = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false
  })
  return categoryModel;
}
