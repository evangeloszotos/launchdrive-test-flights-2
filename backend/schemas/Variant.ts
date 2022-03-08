import {relationship, select, text} from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";
import {AllowOwnerAccessByCustomPath} from "../utils/access-control/AllowOwnerAccess";

const access = AllowOwnerAccessByCustomPath((f) => ({project: {profile: {owner: {id: {equals: f}}}}}))

export const Variant = list({
    access: {
        filter: {
            query: access,
            update: access,
            delete: access,
        }
    },
    fields: {
        project: relationship({
            ref: 'Project.variants',
            ui: {
                hideCreate: true
            }
        }),
        template: relationship({
            ref: 'Template',
            ui: {
                hideCreate: true
            }
        }),
        status: select({
            options: [
                {label: 'Active', value: 'active'},
                {label: 'Inactive', value: 'inactive'},
            ],
            defaultValue: 'active',
            ui: {
                displayMode: 'segmented-control',
            },
            validation: {
                isRequired: true
            }
        }),
        title: text(),
    },
    hooks: {
        validateInput: ({resolvedData, addValidationError}) => {
            if(!resolvedData.template)
                addValidationError("Please select a template")
        },
    }
})