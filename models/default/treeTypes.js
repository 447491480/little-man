/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('treeTypes', {
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
		ParentId: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "0"
		},
		Level: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: "0"
		},
		Sort: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		OwnerId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Type: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: "0"
		},
		IsDelete: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: "0"
		},
		Position: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "tr_0"
		}
	}, {
		tableName: 'treeTypes',
		timestamps: false,
		freezeTableName: true
	});
};
