import {ID_Input} from '../generated/prisma-client';

export interface CharacterCreateInput {
  name: string;
  description: string;
}

export interface CharacterUpdateInput {
  id: ID_Input;
  name?: string;
  description?: string;
}

export interface CharacterDeleteInput {
  id: ID_Input;
}
