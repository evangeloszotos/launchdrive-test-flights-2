import {text} from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";
import {AdminAccess} from "../utils/access-control/RoleBasedAccess";
import {s3File} from "@launchdrive/keystone-s3-input";

export const Template = list({
    access: {
        operation: {
            delete: AdminAccess,
            update: AdminAccess,
            create: AdminAccess
        }
    },
    fields: {
        title: text(),
        preview: s3File({
            s3: {
                bucketName: "templates",
                endPoint: "localhost",
                port: 9000,
                useSsl: false,
                folder: "preview"
            }
        })
    },
})