import {text} from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";

export const UserRole = list({
    access: {
        operation: {
            /*query: AdminAccess,
            create: AdminAccess,
            update: AdminAccess,
            delete: AdminAccess*/
        }
    },
    fields: {
        name: text({validation: {isRequired: true}})
    },
    ui: {
        listView: {
            initialColumns: ['name'],
        },
    },
})