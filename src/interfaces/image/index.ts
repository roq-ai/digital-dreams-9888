import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ImageInterface {
  id?: string;
  image_type: string;
  image_path: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ImageGetQueryInterface extends GetQueryInterface {
  id?: string;
  image_type?: string;
  image_path?: string;
  user_id?: string;
}
