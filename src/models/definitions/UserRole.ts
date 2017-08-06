import {DataTypes} from 'sequelize';



export const UserRoleDefinition = {
	modelName: 'UserRole',
	name: 'userRole',
	model: {
		name: { type: DataTypes.STRING, allowNull: false  }
	},
	options: {
		timestamps: false
	},
	associate: (model, models) => {
		model.hasMany(models.User);
	}
}