/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goods', {
		Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
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
		MaxCount: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		GoodsSalePrice: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		LimitCount: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		OwnerId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ImgJson: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		CreateTime: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		IsDelete: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: "0"
		},
		IsEnable: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: "0"
		},
		CategoryId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BrandId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DetailContent: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		GoodsId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ShopId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		MyCategoryId: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'goods',
		timestamps: false,
		freezeTableName: true
	});
};
