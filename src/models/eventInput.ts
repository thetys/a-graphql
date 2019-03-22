import {ID_Input, DateTimeInput} from '../generated/prisma-client';

export interface EventCreateInput {
  name: string;
  description: string;
  startDate: DateTimeInput;
  endDate?: DateTimeInput;
  characters?: ID_Input[];
  places?: ID_Input[];
}

export interface EventUpdateInput {
  id: ID_Input;
  name?: string;
  description?: string;
  startDate?: DateTimeInput;
  endDate?: DateTimeInput;
  characters?: ID_Input[];
  places?: ID_Input[];
}

export interface EventDeleteInput {
  id: ID_Input;
}
