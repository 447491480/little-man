/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('admin_user', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		account: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		password: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		type: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: true
		},
		rights: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'admin_user',
		timestamps: false,
		freezeTableName: true
	});
};
