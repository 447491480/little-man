/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('consignee', {
		Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		ShopId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ConsigneeName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ConsigneeMobile: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Province: {
			type: DataTypes.STRING,
			allowNull: true
		},
		County: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CreateTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		IsDefault: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'consignee',
		timestamps: false,
		freezeTableName: true
	});
};
