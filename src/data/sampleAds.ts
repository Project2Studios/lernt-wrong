import { NativeAd } from '@/types/ad';

// Sample native ads that blend into the educational content
export const sampleAds: NativeAd[] = [
  {
    id: 'ad-1',
    type: 'book',
    title: 'The Half-Life of Facts',
    description: 'Discover why everything we know has an expiration date. This fascinating book explores how scientific knowledge evolves and why facts we learned in school become outdated.',
    callToAction: 'Learn More',
    targetUrl: 'https://www.amazon.com/Half-life-Facts-Everything-Expiration-Date/dp/0143122681',
    sponsor: 'Amazon Books',
    category: 'Science',
    emoji: '📚',
  },
  {
    id: 'ad-2',
    type: 'course',
    title: 'Understanding Modern Science',
    description: 'Stay current with breakthrough discoveries that are reshaping what we know about biology, physics, and medicine. Perfect for lifelong learners.',
    callToAction: 'Start Learning',
    targetUrl: 'https://www.coursera.org/courses?query=modern%20science',
    sponsor: 'Coursera',
    category: 'Biology',
    emoji: '🔬',
  },
  {
    id: 'ad-3',
    type: 'app',
    title: 'Scientific American',
    description: 'Get the latest scientific breakthroughs delivered to your phone. Stay ahead of outdated textbooks with real-time research updates.',
    callToAction: 'Download App',
    targetUrl: 'https://www.scientificamerican.com/app/',
    sponsor: 'Scientific American',
    category: 'Technology',
    emoji: '📱',
  },
  {
    id: 'ad-4',
    type: 'course',
    title: 'The Science of Well-Being',
    description: 'Yale\'s most popular course reveals what psychology really says about happiness - much of it contradicts what we learned about human behavior.',
    callToAction: 'Enroll Free',
    targetUrl: 'https://www.coursera.org/learn/the-science-of-well-being',
    sponsor: 'Yale University',
    category: 'Psychology',
    emoji: '🧠',
  },
  {
    id: 'ad-5',
    type: 'book',
    title: 'Astrophysics for People in a Hurry',
    description: 'Neil deGrasse Tyson updates your understanding of the universe with the latest cosmic discoveries that have revolutionized astronomy.',
    callToAction: 'Read Now',
    targetUrl: 'https://www.amazon.com/Astrophysics-People-Hurry-deGrasse-Tyson/dp/0393609391',
    sponsor: 'Norton Books',
    category: 'Astronomy',
    emoji: '🌌',
  },
  {
    id: 'ad-6',
    type: 'educational',
    title: 'Khan Academy: Updated Science',
    description: 'Free courses covering the latest scientific understanding in biology, chemistry, and physics. Learn what your textbooks got wrong.',
    callToAction: 'Start Learning',
    targetUrl: 'https://www.khanacademy.org/science',
    sponsor: 'Khan Academy',
    category: 'Education',
    emoji: '🎓',
  },
  {
    id: 'ad-7',
    type: 'book',
    title: 'The Gene: An Intimate History',
    description: 'Siddhartha Mukherjee reveals how our understanding of genetics has transformed, debunking many assumptions from older biology textbooks.',
    callToAction: 'Explore',
    targetUrl: 'https://www.amazon.com/Gene-Intimate-History-Siddhartha-Mukherjee/dp/1476733503',
    sponsor: 'Scribner',
    category: 'Genetics',
    emoji: '🧬',
  },
  {
    id: 'ad-8',
    type: 'app',
    title: 'Brilliant: Learn by Doing',
    description: 'Interactive courses that teach modern science concepts through hands-on problem solving. Update your knowledge with current research.',
    callToAction: 'Try Free',
    targetUrl: 'https://brilliant.org/',
    sponsor: 'Brilliant',
    category: 'Education',
    emoji: '💡',
  }
];

// Ad configuration
export const adConfig = {
  enabled: true,
  frequency: 4, // Show ad every 4 facts
  maxAdsPerSession: 3,
  categories: [
    'Science', 'Biology', 'Physics', 'Chemistry', 'Medicine',
    'Psychology', 'Astronomy', 'Technology', 'Education', 'Genetics'
  ],
};