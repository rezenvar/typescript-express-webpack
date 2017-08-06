

import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as upload from 'express-fileupload';
import * as session from 'express-session';
import * as expressMySqlSession from 'express-mysql-session';
import * as helmet from 'helmet';
import * as cors from 'cors';
import config from './app.config';
import controllers from './controllers';
import { sequelize } from './models';
import { ApiMiddleware, AuthMiddleware } from './middlewares';


const app = express();
const MySqlStore = expressMySqlSession(session);
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload());
app.use(cors());
app.use(session({
	key: 'sessionId',
	secret: 'sessionSecret',
	store: new MySqlStore({
		host: config.db.host,
		port: config.db.port,
		user: config.db.user,
		password: config.db.password,
		database: config.db.database,
		schema: { tableName: config.db.sessionTable }
	}),
	resave: false,
	saveUninitialized: false
}));

app.use(ApiMiddleware);
app.use(AuthMiddleware);
app.use('/api', controllers);



sequelize.sync().then(() => {
	app.listen(config.app.port, () => {
		console.log('App listen at port ' + config.app.port);
	});
});

