/**
 * Utility function to get the correct image path
 * Accounts for both development (localhost) and production (GitHub Pages) environments
 */
export const getImageUrl = (imagePath: string): string => {
  // In development, images are served from /public
  // In production on GitHub Pages, they need the /jdldavao/ prefix
  const basePath = window.location.pathname.includes('/jdldavao/')
    ? '/jdldavao'
    : '';
  
  return `${basePath}${imagePath.startsWith('/') ? imagePath : '/' + imagePath}`;
};
