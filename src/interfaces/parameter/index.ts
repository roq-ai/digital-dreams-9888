import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ParameterInterface {
  id?: string;
  parameter_name: string;
  parameter_value: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ParameterGetQueryInterface extends GetQueryInterface {
  id?: string;
  parameter_name?: string;
  parameter_value?: string;
  user_id?: string;
}
