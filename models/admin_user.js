/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('admin_user', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		account: {
			type: DataTypes.STRING,
			allowNull: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true
		},
		type: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		rights: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'admin_user',
		timestamps: false,
		freezeTableName: true
	});
};
