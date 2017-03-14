/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goodsRelation', {
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
		OriGoodsId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		OriOwnerId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NowGoodsId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NowOwnerId: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'goodsRelation',
		timestamps: false,
		freezeTableName: true
	});
};
