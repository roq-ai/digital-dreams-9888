import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GalleryInterface {
  id?: string;
  gallery_name: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface GalleryGetQueryInterface extends GetQueryInterface {
  id?: string;
  gallery_name?: string;
  user_id?: string;
}
