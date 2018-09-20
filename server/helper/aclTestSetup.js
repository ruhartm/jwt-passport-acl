import mongoose from 'mongoose';
import Acl from 'acl';
import config from '../config/config';

// Mongodb connection
mongoose.connect(config.db, { useNewUrlParser: true }, (error) => {
    if (error) return console.error(error);
    // eslint-disable-next-line
    const appAcl = new Acl(new Acl.mongodbBackend(mongoose.connection.db, 'acl_'));

    appAcl.allow([
        {
            roles: 'admin',
            allows: [
                { resources: '/protected', permissions: 'get' },
                { resources: '/admin', permissions: '*' }
            ]
        }, {
            roles: 'user',
            allows: [
                { resources: '/protected', permissions: 'get' }
            ]
        } 
    ], () => {
        appAcl.addRoleParents('user', 'guest', () => {
            appAcl.addRoleParents('admin', 'user', () => {
                appAcl.addUserRoles('admin', ['admin'], () => {
                    console.log('fertig');
                });
            });
        });
    });
    return false;
});
