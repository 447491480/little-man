/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('promotionJoiners', {
		CreateTime: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		PID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		SID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TargetRoleId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PromotionId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		StartTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		EndTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		}
	}, {
		tableName: 'promotionJoiners',
		timestamps: false,
		freezeTableName: true
	});
};
