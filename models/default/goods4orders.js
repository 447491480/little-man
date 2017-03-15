/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goods4orders', {
		Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		GoodsUUID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GoodsId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		OrderId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		GoodsNum: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ShopId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BrandId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CategoryId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GoodsTitle: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GoodsShortTitle: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GoodsOriginalPrice: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: "0.00"
		},
		GoodsSupplyPrice: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: "0.00"
		},
		GoodsImgPath: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GoodsSalePrice: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		GoodsDiscount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		OwnerId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ImgJson: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		DetailContent: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		BuyType: {
			type: DataTypes.INTEGER(8),
			allowNull: true,
			defaultValue: "0"
		},
		CreateTime: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'goods4orders',
		timestamps: false,
		freezeTableName: true
	});
};
