import { DataTypes } from 'sequelize';



export const UserDefinition = {
	modelName: 'User',
	name: 'user',
	model: {
		name: { type: DataTypes.STRING, allowNull: false, unique: true },
		email: { type: DataTypes.STRING, allowNull: false, unique: true },
		password: { type: DataTypes.STRING, allowNull: false }
	},
	options: {
		timestamps: false
	},
	associate: (model, models) => {
		model.belongsTo(models.UserRole);
	}
}