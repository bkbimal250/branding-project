// Cloudinary Configuration and Utilities

// Replace 'your-cloud-name' with your actual Cloudinary cloud name
const CLOUDINARY_CLOUD_NAME = 'dm2bxj0gx';

// Base URL for Cloudinary
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}`;

// Common transformations
export const TRANSFORMATIONS = {
  // Image transformations
  thumbnail: 'w_300,h_200,c_fill',
  medium: 'w_600,h_400,c_fill',
  large: 'w_1200,h_800,c_fill',
  cover: 'w_800,h_600,c_fill',
  
  // Video transformations
  videoThumbnail: 'w_400,h_300,c_fill',
  videoMedium: 'w_800,h_600',
  videoLarge: 'w_1200,h_800',
  
  // Quality and format
  highQuality: 'q_auto,f_auto',
  webp: 'f_webp',
  jpg: 'f_jpg'
};

// Helper function to build Cloudinary URLs
export const buildCloudinaryUrl = (publicId, transformation = '', resourceType = 'image') => {
  const baseUrl = `${CLOUDINARY_BASE_URL}/${resourceType}/upload`;
  const version = 'v1'; // You can make this dynamic if needed
  
  if (transformation) {
    return `${baseUrl}/${transformation}/${version}/${publicId}`;
  }
  
  return `${baseUrl}/${version}/${publicId}`;
};

// Helper function for portfolio images
export const getPortfolioImage = (imageName, transformation = TRANSFORMATIONS.medium) => {
  return buildCloudinaryUrl(`portfolio/${imageName}`, transformation, 'image');
};

// Helper function for portfolio videos
export const getPortfolioVideo = (videoName, transformation = TRANSFORMATIONS.videoMedium) => {
  return buildCloudinaryUrl(`portfolio/${videoName}`, transformation, 'video');
};

// Helper function for cover images
export const getCoverImage = (imageName) => {
  return buildCloudinaryUrl(`portfolio/${imageName}`, TRANSFORMATIONS.cover, 'image');
};

// Helper function for thumbnails
export const getThumbnail = (imageName) => {
  return buildCloudinaryUrl(`portfolio/${imageName}`, TRANSFORMATIONS.thumbnail, 'image');
};

// Example usage:
// getPortfolioImage('beauty-brand-1') 
// → https://res.cloudinary.com/your-cloud-name/image/upload/w_600,h_400,c_fill/v1/portfolio/beauty-brand-1

// getPortfolioVideo('spa-website-demo')
// → https://res.cloudinary.com/your-cloud-name/video/upload/w_800,h_600/v1/portfolio/spa-website-demo 