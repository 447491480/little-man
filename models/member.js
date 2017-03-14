/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('member', {
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
		MemberAccount: {
			type: DataTypes.STRING,
			allowNull: true
		},
		MemberPass: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Type: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: "0"
		},
		Rights: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		canAppLogin: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: "0"
		},
		ShopId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IsDel: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: "0"
		},
		Department: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'member',
		timestamps: false,
		freezeTableName: true
	});
};
