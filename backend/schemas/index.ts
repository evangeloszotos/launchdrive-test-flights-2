import { User } from './User';
import { UserRole } from './UserRole';
import { Profile } from './Profile';
import { Project } from './Project';
import { Template } from './Template';
import { Variant } from './Variant';
import { ListSchemaConfig} from "@keystone-6/core/dist/declarations/src/types/config/lists";

export const lists: ListSchemaConfig = {
  Profile,
  Project,
  Template,
  User,
  UserRole,
  Variant,
};