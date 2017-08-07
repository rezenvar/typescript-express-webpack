// vendor
import { Sequelize, DataTypes, Model, ModelAttributes } from 'sequelize';
import * as fs from 'fs';
// other
import config from './../app.config';


import {
	UserDefinition,
	UserRoleDefinition
} from './definitions';




export const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
	host: config.db.host,
	pool: { max: 5, min: 0, idle: 10000 },
	dialect: 'mysql'
});


class SequelizeHelper {
	static defineModel(definition)   {
		return sequelize.define(definition.name, definition.model, definition.options);
	}
}



export const Models = {
	User: SequelizeHelper.defineModel(UserDefinition),
	UserRole: SequelizeHelper.defineModel(UserRoleDefinition)
};