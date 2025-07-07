import { 
  getPortfolioImage, 
  getPortfolioVideo, 
  getCoverImage, 
  getThumbnail,
  TRANSFORMATIONS 
} from '../utils/cloudinary.js';

export const work = [
  {
    id: 1,
    name: "Digital Marketing",
    title: "Boosting Online Sales for a Beauty Brand",
    shortDesc: "Ran targeted ads and social media campaigns to increase conversions.",
    date: "May 2025",
    clientName: "Glamour Glow",
    coverType: "image",
    coverMedia: getCoverImage("beauty-brand-campaign"),
    pdfs: [
      "/pdfs/digital-marketing-report.pdf"
    ],
    videos: [
      getPortfolioVideo("beauty-campaign-video")
    ],
    images: [
      getPortfolioImage("beauty-brand-1"),
      getPortfolioImage("beauty-brand-2"),
      getPortfolioImage("beauty-brand-3")
    ]
  },
  {
    id: 2,
    name: "Spa Website Redesign",
    title: "Full UI/UX revamp of premium spa chain",
    shortDesc: "Created a clean and modern web experience for multiple spa locations.",
    date: "March 2025",
    clientName: "Serenity Spas",
    coverType: "video",
    coverMedia: getPortfolioVideo("spa-website-preview", TRANSFORMATIONS.videoThumbnail),
    pdfs: [],
    videos: [
      getPortfolioVideo("spa-website-demo")
    ],
    images: [
      getPortfolioImage("spa-website-1"),
      getPortfolioImage("spa-website-2"),
      getPortfolioImage("spa-website-3")
    ]
  },
  {
    id: 3,
    name: "Brand Identity Design",
    title: "Creating a Bold Visual Identity for a Tech Startup",
    shortDesc: "Designed logo, brand colors, typography, and pitch deck.",
    date: "February 2025",
    clientName: "TechNova",
    coverType: "image",
    coverMedia: getCoverImage("technova-brand-cover"),
    pdfs: [
      "/pdfs/brand-guidelines.pdf"
    ],
    videos: [],
    images: [
      getPortfolioImage("technova-logo"),
      getPortfolioImage("technova-branding"),
      getPortfolioImage("technova-stationery")
    ]
  },
  {
    id: 4,
    name: "E-commerce Development",
    title: "Launching an Online Store for Handmade Jewelry",
    shortDesc: "Developed a full-stack e-commerce platform using React and Node.js.",
    date: "April 2025",
    clientName: "CrystalCrafts",
    coverType: "image",
    coverMedia: getCoverImage("crystalcrafts-website"),
    pdfs: [],
    videos: [],
    images: [
      getPortfolioImage("crystalcrafts-homepage"),
      getPortfolioImage("crystalcrafts-product-page"),
      getPortfolioImage("crystalcrafts-mobile")
    ]
  },
  {
    id: 5,
    name: "Social Media Campaign",
    title: "Trending Instagram Reel Strategy for a Gym",
    shortDesc: "Produced short-form videos that went viral and boosted gym memberships.",
    date: "June 2025",
    clientName: "FitZone",
    coverType: "video",
    coverMedia: getPortfolioVideo("fitzone-reel-preview", TRANSFORMATIONS.videoThumbnail),
    pdfs: [],
    videos: [
      getPortfolioVideo("fitzone-reel-1"),
      getPortfolioVideo("fitzone-reel-2")
    ],
    images: [
      getPortfolioImage("fitzone-campaign-1"),
      getPortfolioImage("fitzone-campaign-2")
    ]
  },
  {
    id: 6,
    name: "Logo Animation",
    title: "Animated Logo Design for Holiday Sathi",
    shortDesc: "Created dynamic logo animations for travel company branding.",
    date: "January 2025",
    clientName: "Holiday Sathi",
    coverType: "video",
    coverMedia: getPortfolioVideo("holiday-sathi-logo-animation", TRANSFORMATIONS.videoThumbnail),
    pdfs: [],
    videos: [
      getPortfolioVideo("holiday-sathi-animation-1"),
      getPortfolioVideo("holiday-sathi-animation-2")
    ],
    images: [
      getPortfolioImage("holiday-sathi-logo"),
      getPortfolioImage("holiday-sathi-branding")
    ]
  },
  {
    id: 7,
    name: "Festival Reels",
    title: "Festival Marketing Campaigns",
    shortDesc: "Created engaging festival-themed social media content for various clients.",
    date: "December 2024",
    clientName: "Multiple Clients",
    coverType: "video",
    coverMedia: getPortfolioVideo("festival-reels-compilation", TRANSFORMATIONS.videoThumbnail),
    pdfs: [],
    videos: [
      getPortfolioVideo("dussehra-reel"),
      getPortfolioVideo("mahashivratri-reel"),
      getPortfolioVideo("valentine-reel")
    ],
    images: [
      getPortfolioImage("festival-campaign-1"),
      getPortfolioImage("festival-campaign-2")
    ]
  },
  {
    id: 8,
    name: "Travel Reels",
    title: "Travel Destination Marketing",
    shortDesc: "Produced stunning travel destination videos for tourism promotion.",
    date: "November 2024",
    clientName: "Holiday Sathi",
    coverType: "video",
    coverMedia: getPortfolioVideo("travel-reels-cover", TRANSFORMATIONS.videoThumbnail),
    pdfs: [],
    videos: [
      getPortfolioVideo("kashmir-travel-reel"),
      getPortfolioVideo("kerala-travel-reel"),
      getPortfolioVideo("darjeeling-travel-reel")
    ],
    images: [
      getPortfolioImage("travel-destination-1"),
      getPortfolioImage("travel-destination-2")
    ]
  }
]; 