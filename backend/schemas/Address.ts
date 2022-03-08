import { integer, relationship, text } from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";

export const Address = list({
    fields: {
      street: text(),
      city: text(),
      zip: integer(),
      owner: relationship({
        ref: 'User.address',
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          linkToItem: true,
        },
      }),
    },
  })