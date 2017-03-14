/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('consignee4orders', {
		Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		OrderCode: {
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
		ExpressTimeType: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Province: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		County: {
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
		}
	}, {
		tableName: 'consignee4orders',
		timestamps: false,
		freezeTableName: true
	});
};
