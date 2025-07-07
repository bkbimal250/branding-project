// Cloudinary Configuration for Server-side Operations
// Note: These credentials should only be used on the server side, never in client-side code

export const CLOUDINARY_CONFIG = {
  cloud_name: 'dm2bxj0gx',
  api_key: '784664125842943',
  api_secret: 'v_Df1SW6exljTtfkvoGKQWlStm0',
  secure: true
};

// For client-side use, only expose the cloud name
export const CLOUDINARY_CLIENT_CONFIG = {
  cloud_name: 'dm2bxj0gx',
  secure: true
};

// Base URL for client-side image/video URLs
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLIENT_CONFIG.cloud_name}`;

// Common transformations for your portfolio
export const PORTFOLIO_TRANSFORMATIONS = {
  // Cover images (for portfolio cards)
  cover: 'w_800,h_600,c_fill,q_auto,f_auto',
  
  // Thumbnail images (for galleries)
  thumbnail: 'w_300,h_200,c_fill,q_auto,f_auto',
  
  // Medium images (for detailed views)
  medium: 'w_600,h_400,c_fill,q_auto,f_auto',
  
  // Large images (for full-size viewing)
  large: 'w_1200,h_800,c_fill,q_auto,f_auto',
  
  // Video thumbnails
  videoThumbnail: 'w_400,h_300,c_fill,q_auto,f_auto',
  
  // Video medium
  videoMedium: 'w_800,h_600,q_auto,f_auto',
  
  // Video large
  videoLarge: 'w_1200,h_800,q_auto,f_auto'
};

// Helper function to build Cloudinary URLs with transformations
export const buildCloudinaryUrl = (publicId, transformation = '', resourceType = 'image') => {
  const baseUrl = `${CLOUDINARY_BASE_URL}/${resourceType}/upload`;
  
  if (transformation) {
    return `${baseUrl}/${transformation}/${publicId}`;
  }
  
  return `${baseUrl}/${publicId}`;
};

// Helper functions for your portfolio
export const getPortfolioImage = (imageName, transformation = PORTFOLIO_TRANSFORMATIONS.medium) => {
  return buildCloudinaryUrl(imageName, transformation, 'image');
};

export const getPortfolioVideo = (videoName, transformation = PORTFOLIO_TRANSFORMATIONS.videoMedium) => {
  return buildCloudinaryUrl(videoName, transformation, 'video');
};

export const getCoverImage = (imageName) => {
  return buildCloudinaryUrl(imageName, PORTFOLIO_TRANSFORMATIONS.cover, 'image');
};

export const getThumbnail = (imageName) => {
  return buildCloudinaryUrl(imageName, PORTFOLIO_TRANSFORMATIONS.thumbnail, 'image');
}; 