/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('category', {
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
		CategoryName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CategoryImg: {
			type: DataTypes.STRING,
			allowNull: true
		},
		OwnerId: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'category',
		timestamps: false,
		freezeTableName: true
	});
};
