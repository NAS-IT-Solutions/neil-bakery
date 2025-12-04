import type { NavItem, Outlet, Testimonial, CategoryItem, ContactInfo } from '@/types';

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', id: 'home' },
  { name: 'About Us', id: 'about' },
  { name: 'Outlets', id: 'outlets' },
  { name: 'Products', id: 'products' },
  { name: 'Feedback', id: 'feedback' },
  { name: 'Contact Us', id: 'contact' },
];

// Company information
export const COMPANY_INFO = {
  name: "Neil's Bakery",
  tagline: 'Freshly baked goods made with love',
  description:
    "Freshly baked goods made with love and the finest ingredients. Serving our community since [Year].",
  email: 'info@neilsbakery.com',
  phone: '+1 (555) 123-4567',
  address: '123 Bakery Street, Downtown, City, State 12345',
} as const;

// Outlets data
export const OUTLETS: Outlet[] = [
  {
    name: 'Downtown Branch',
    address: '123 Main Street, Downtown',
    hours: 'Mon-Sat: 7AM - 8PM, Sun: 8AM - 6PM',
    phone: '+1 (555) 123-4567',
  },
  {
    name: 'Westside Branch',
    address: '456 West Avenue, Westside',
    hours: 'Mon-Sat: 7AM - 8PM, Sun: 8AM - 6PM',
    phone: '+1 (555) 234-5678',
  },
  {
    name: 'Eastside Branch',
    address: '789 East Boulevard, Eastside',
    hours: 'Mon-Sat: 7AM - 8PM, Sun: 8AM - 6PM',
    phone: '+1 (555) 345-6789',
  },
];

// Product categories for home page
export const PRODUCT_CATEGORIES: CategoryItem[] = [
  {
    name: 'Breads',
    description: 'Freshly baked artisan breads',
    icon: '🍞',
    items: ['Sourdough', 'Whole Wheat', 'French Baguette', 'Multigrain'],
  },
  {
    name: 'Pastries',
    description: 'Delicious sweet and savory pastries',
    icon: '🥐',
    items: ['Croissants', 'Danish', 'Puff Pastry', 'Eclairs'],
  },
  {
    name: 'Cakes',
    description: 'Custom cakes for every occasion',
    icon: '🎂',
    items: ['Birthday Cakes', 'Wedding Cakes', 'Cupcakes', 'Cheesecakes'],
  },
  {
    name: 'Sweets',
    description: 'Delightful sweet treats',
    icon: '🍬',
    items: ['Cookies', 'Brownies', 'Macarons', 'Donuts'],
  },
  {
    name: 'Drinks',
    description: 'Refreshing beverages',
    icon: '☕',
    items: ['Coffee', 'Tea', 'Fresh Juice', 'Smoothies'],
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'The best bakery in town! Their croissants are absolutely divine.',
    date: 'Nov 2024',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    comment: 'Fresh bread every day and amazing customer service. Highly recommended!',
    date: 'Oct 2024',
  },
  {
    name: 'Emma Williams',
    rating: 5,
    comment: 'Their custom cakes are works of art. Perfect for special occasions!',
    date: 'Dec 2024',
  },
];

// Contact information items
export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: '📍',
    title: 'Address',
    content: ['123 Bakery Street, Downtown', 'City, State 12345'],
  },
  {
    icon: '📞',
    title: 'Phone',
    content: '+1 (555) 123-4567',
  },
  {
    icon: '✉️',
    title: 'Email',
    content: 'info@neilsbakery.com',
  },
  {
    icon: '🕒',
    title: 'Business Hours',
    content: ['Monday - Saturday: 7:00 AM - 8:00 PM', 'Sunday: 8:00 AM - 6:00 PM'],
  },
];

// Statistics
export const STATS = [
  { value: '100+', label: 'Products' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '5+', label: 'Outlets' },
] as const;
