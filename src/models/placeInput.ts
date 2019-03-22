import {ID_Input} from '../generated/prisma-client';

export interface PlaceCreateInput {
  name: string;
  description: string;
}

export interface PlaceUpdateInput {
  id: ID_Input;
  name?: string;
  description?: string;
}

export interface PlaceDeleteInput {
  id: ID_Input;
}
