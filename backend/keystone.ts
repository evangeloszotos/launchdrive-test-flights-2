import {config} from '@keystone-6/core';

import {lists} from './schemas';
import {withAuth, session} from './auth';
import 'dotenv/config'

export default withAuth(
    config({
        db: {
            provider: 'postgresql',
            url: 'postgres://postgres:mysecretpassword@localhost:5432/keystone',
        },
        ui: {
            isAccessAllowed: (context) => !!context.session?.data,
        },
        lists,
        session,
        images: {
            upload: 'local',
            local: {
                storagePath: 'public/images',
                baseUrl: '/images',
            },
        }
    })
);
