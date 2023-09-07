const mapping: Record<string, string> = {
  designs: 'design',
  galleries: 'gallery',
  images: 'image',
  organizations: 'organization',
  parameters: 'parameter',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
