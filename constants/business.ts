import { Business } from '@/types/type';

export const businesses: Business[] = [
  {
    id: 1,
    name: 'TechFix Electricians',
    type: 'service',
    category: ['Electrician', 'Home Services'],
    description:
      'Professional electrical services for residential and commercial properties.',
    services: [
      {
        serviceId: 1,
        name: 'Wiring Installation',
        categories: ['Installation', 'Electrical'],
        description: 'Installation of new wiring systems.',
      },
      {
        serviceId: 2,
        name: 'Circuit Repairs',
        categories: ['Repairs', 'Electrical'],
        description: 'Repair of faulty electrical circuits.',
      },
    ],
    location: {
      address: '123 Electric Ave, San Francisco, CA 94103',
      latitude: 37.7749,
      longitude: -122.4194,
    },
    reviews: [
      {
        reviewId: 1,
        rating: 5,
        comment: 'Great service! Highly recommend.',
      },
    ],
    contact: {
      phone: '123-456-7890',
      email: 'info@techfix.com',
    },
    images: [
      'https://i.imgur.com/DMQHGA0.jpeg',
      'https://i.imgur.com/qrs9QBg.jpeg',
      'https://i.imgur.com/XVp8T1I.jpeg',
    ],
    coverImages: ['https://i.imgur.com/DMQHGA0.jpeg'],
    openHours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },
  },
  {
    id: 2,
    name: 'Cafe Aroma',
    type: 'product',
    category: ['Cafe', 'Food & Beverage'],
    description: 'A cozy place for coffee and pastries.',
    products: [
      {
        productId: 1,
        name: 'Espresso',
        categories: ['Beverage', 'Coffee'],
        price: 3.5,
        description: 'Strong and aromatic espresso.',
      },
      {
        productId: 2,
        name: 'Croissant',
        categories: ['Pastry', 'Bakery'],
        price: 2.0,
        description: 'Flaky butter croissant.',
      },
    ],
    location: {
      address: '456 Brew St, San Francisco, CA 94103',
      latitude: 37.775,
      longitude: -122.4195,
    },
    reviews: [
      {
        reviewId: 1,
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
      },
      {
        reviewId: 2,
        rating: 2,
        comment: 'Great coffee, but a bit pricey.',
      },
      {
        reviewId: 3,
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
      },
    ],
    contact: {
      phone: '987-654-3210',
      email: 'info@cafearoma.com',
    },
    images: [
      'https://i.imgur.com/vEz2Tg8.jpeg',
      'https://i.imgur.com/10OZjhs.jpeg',
      'https://i.imgur.com/JLzO9fY.jpeg',
    ],
    coverImages: [
      'https://i.imgur.com/qrs9QBg.jpeg',
      'https://i.imgur.com/4r9FLew.jpeg',
      'https://i.imgur.com/0evU4RE.jpeg',
    ],
    openHours: {
      monday: '7:00 AM - 5:00 PM',
      tuesday: '7:00 AM - 5:00 PM',
      wednesday: '7:00 AM - 5:00 PM',
      thursday: '7:00 AM - 5:00 PM',
      friday: '7:00 AM - 5:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
  },
  {
    id: 3,
    name: 'FitPro Gym',
    type: 'mixed',
    category: ['Gym', 'Fitness', 'Health & Wellness'],
    description: 'Gym offering both fitness services and health products.',
    services: [
      {
        serviceId: 1,
        name: 'Personal Training',
        categories: ['Training', 'Fitness', 'Personal Services'],
        description: 'One-on-one personal training sessions.',
      },
      {
        serviceId: 2,
        name: 'Yoga Classes',
        categories: ['Fitness', 'Group Classes', 'Wellness'],
        description: 'Group yoga sessions.',
      },
    ],
    products: [
      {
        productId: 1,
        name: 'Protein Shake',
        categories: ['Beverage', 'Supplement', 'Fitness'],
        price: 5.0,
        description: 'A nutritious post-workout protein shake.',
      },
      {
        productId: 2,
        name: 'Yoga Mat',
        categories: ['Fitness', 'Equipment', 'Yoga'],
        price: 15.0,
        description: 'High-quality mat for yoga and other exercises.',
      },
    ],
    location: {
      address: '789 Gym Rd, San Francisco, CA 94103',
      latitude: 37.7751,
      longitude: -122.4196,
    },
    reviews: [
      {
        reviewId: 1,
        rating: 5,
        comment: 'Excellent gym with top-notch trainers!',
      },
    ],
    contact: {
      phone: '111-222-3333',
      email: 'info@fitprogym.com',
    },
    images: [
      'https://i.imgur.com/Ugb06yb.jpeg',
      'https://i.imgur.com/kYpW0ic.jpeg',
      'https://i.imgur.com/YtPHxFk.jpeg',
    ],
    coverImages: [
      'https://i.imgur.com/XVp8T1I.jpeg',
      'https://i.imgur.com/1n1rtnY.jpeg',
      'https://i.imgur.com/FKY6doA.jpeg',
    ],
    openHours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '8:00 AM - 6:00 PM',
    },
  },
  {
    id: 4,
    name: 'GreenThumb Landscaping',
    type: 'service',
    category: ['Landscaping', 'Home Services'],
    description:
      'Expert landscaping services for residential and commercial properties.',
    services: [
      {
        serviceId: 1,
        name: 'Lawn Care',
        categories: ['Maintenance', 'Outdoor'],
        description: 'Regular lawn mowing and care services.',
      },
      {
        serviceId: 2,
        name: 'Landscape Design',
        categories: ['Design', 'Outdoor'],
        description: 'Custom landscaping designs for your garden or yard.',
      },
    ],
    location: {
      address: '101 Garden Rd, San Francisco, CA 94103',
      latitude: 37.774,
      longitude: -122.421,
    },
    reviews: [
      {
        reviewId: 1,
        rating: 4,
        comment: 'Great service and attention to detail!',
      },
    ],
    contact: {
      phone: '555-555-5555',
      email: 'contact@greenthumb.com',
    },
    images: [
      'https://i.imgur.com/khV8h9h.jpeg',
      'https://i.imgur.com/h4U1YJz.jpeg',
      'https://i.imgur.com/YQX6hbO.jpeg',
    ],
    coverImages: [
      'https://i.imgur.com/qrs9QBg.jpeg',
      'https://i.imgur.com/5gK0KOe.jpeg',
      'https://i.imgur.com/VtqZFP1.jpeg',
    ],
    openHours: {
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 6:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 3:00 PM',
      sunday: 'Closed',
    },
  },
  {
    id: 5,
    name: 'TechHub Electronics',
    type: 'product',
    category: ['Electronics', 'Retail'],
    description:
      'Your one-stop shop for all the latest gadgets and electronics.',
    products: [
      {
        productId: 1,
        name: 'Smartphone',
        categories: ['Mobile', 'Electronics'],
        price: 999.99,
        description: 'Latest model smartphone with cutting-edge features.',
      },
      {
        productId: 2,
        name: 'Laptop',
        categories: ['Computers', 'Electronics'],
        price: 1499.99,
        description: 'High-performance laptop for work and play.',
      },
    ],
    location: {
      address: '102 Tech St, San Francisco, CA 94103',
      latitude: 37.7755,
      longitude: -122.4185,
    },
    reviews: [
      {
        reviewId: 1,
        rating: 4,
        comment: 'Great selection of products, but a bit pricey.',
      },
    ],
    contact: {
      phone: '555-666-7777',
      email: 'info@techhub.com',
    },
    images: [
      'https://i.imgur.com/3y70ZmY.jpeg',
      'https://i.imgur.com/Z2J0G4k.jpeg',
      'https://i.imgur.com/S0dd7Hh.jpeg',
    ],
    coverImages: [
      'https://i.imgur.com/qrs9QBg.jpeg',
      'https://i.imgur.com/JiYXsJ3.jpeg',
      'https://i.imgur.com/QyMfMwN.jpeg',
    ],
    openHours: {
      monday: '9:00 AM - 7:00 PM',
      tuesday: '9:00 AM - 7:00 PM',
      wednesday: '9:00 AM - 7:00 PM',
      thursday: '9:00 AM - 7:00 PM',
      friday: '9:00 AM - 7:00 PM',
      saturday: '10:00 AM - 5:00 PM',
      sunday: 'Closed',
    },
  },
  {
    id: 6,
    name: 'PetPal Veterinary Clinic',
    type: 'service',
    category: ['Veterinary', 'Healthcare'],
    description:
      'Comprehensive veterinary care for your pets, from check-ups to emergency treatments.',
    services: [
      {
        serviceId: 1,
        name: 'Routine Check-Up',
        categories: ['Health', 'Check-Up'],
        description: 'Regular health check-ups for your pets.',
      },
      {
        serviceId: 2,
        name: 'Emergency Care',
        categories: ['Health', 'Emergency'],
        description: 'Immediate care for injured or ill pets.',
      },
    ],
    location: {
      address: '123 Pet St, San Francisco, CA 94103',
      latitude: 37.7735,
      longitude: -122.4205,
    },
    reviews: [
      {
        reviewId: 1,
        rating: 5,
        comment: 'Exceptional care for my dog. Highly recommend!',
      },
      {
        reviewId: 2,
        rating: 3,
        comment: 'Exceptional care for my dog. Highly recommend!',
      },
    ],
    contact: {
      phone: '555-777-8888',
      email: 'contact@petpalclinic.com',
    },
    images: [
      'https://i.imgur.com/F0mc5zp.jpeg',
      'https://i.imgur.com/2V2N0gX.jpeg',
      'https://i.imgur.com/O5wBhfd.jpeg',
    ],
    coverImages: [
      'https://i.imgur.com/qrs9QBg.jpeg',
      'https://i.imgur.com/COtrxxg.jpeg',
      'https://i.imgur.com/ZghbGvw.jpeg',
    ],
    openHours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed',
    },
  },
];
