/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('promotions', {
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
		PromotionTitle: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PromotionType: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PromotionContent: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Priority: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: "0"
		},
		RegionId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CreatorId: {
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
		TargetRoleId: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'promotions',
		timestamps: false,
		freezeTableName: true
	});
};
