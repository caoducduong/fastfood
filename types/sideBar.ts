export interface IPermission {
  admin: boolean;
  user: boolean;
}

export interface ISidebarItem {
  fixed?: boolean;
  permission?: 'admin' | 'user';
  icon: string;
  title: string;
  to: string;
}
