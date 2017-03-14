/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brands', {
		Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		CreateTime: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		BrandName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BrandImg: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'brands',
		timestamps: false,
		freezeTableName: true
	});
};
