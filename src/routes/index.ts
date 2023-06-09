import {Express} from 'express';

import authentication from './authentication';
import prices from './prices';
import services from './services';
import reviews from './reviews';
import users from './users';
import admin from './admin';

const endpoints = (app: Express) => {
    app.use('/api/authentication', authentication);
    app.use('/api/prices', prices);
    app.use('/api/services', services);
    app.use('/api/reviews', reviews);
    app.use('/api/users', users);
    app.use('/api/admin', admin);
}

export default endpoints