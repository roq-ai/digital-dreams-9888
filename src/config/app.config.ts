interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Administrator', 'Payment Manager'],
  tenantName: 'Organization',
  applicationName: 'Digital dreams',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Register organization with the webapp',
    "Manage organization's information and settings",
    'Invite Team Members, Administrators, and Payment Managers',
    'Manage images for design transfer',
  ],
};
