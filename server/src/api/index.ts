import { Router } from 'express';
import auth from './routes/auth';
import bp from './routes/bp';
import user from './routes/user';
import agendash from './routes/agendash';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	auth(app);
	bp(app);
	user(app);
	agendash(app);

	return app
}