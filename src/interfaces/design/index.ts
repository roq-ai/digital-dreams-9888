import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DesignInterface {
  id?: string;
  design_name: string;
  design_path: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DesignGetQueryInterface extends GetQueryInterface {
  id?: string;
  design_name?: string;
  design_path?: string;
  user_id?: string;
}
