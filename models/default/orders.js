/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('orders', {
		Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		PurchaserId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		OrderProgressState: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		OrderProgressInfo: {
			type: DataTypes.STRING,
			allowNull: true
		},
		OrderCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		OrderTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		OrderPayInfo: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GoodsTotalPrice: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		OrderTotalPrice: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		OrderTotalDiscount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: "0.00"
		},
		OrderTotalNum: {
			type: DataTypes.INTEGER(8),
			allowNull: true
		},
		PaidCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		OrderImage: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Orderfrom: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IsDeleted: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: "0"
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		SellerId: {
			type: DataTypes.STRING,
			allowNull: true
		},
		HasChecked: {
			type: DataTypes.DATE,
			allowNull: true
		},
		CreateTime: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'orders',
		timestamps: false,
		freezeTableName: true
	});
};
