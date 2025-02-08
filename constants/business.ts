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
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 1,
          username: 'Jane Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T12:00:00Z',
        replies: [
          {
            replyId: 1,
            replyText:
              'Thank you for your feedback! We are working on pricing.',
            replyUser: {
              userId: 4,
              username: 'Business Owner',
              profilePicture:
                'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            timestamp: '2025-02-08T14:00:00Z',
          },
        ],
      },
      {
        reviewId: 2,
        rating: 2,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 2,
          username: 'John Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T13:00:00Z',
        replies: [],
      },
      {
        reviewId: 3,
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 3,
          username: 'Sam Smith',
          profilePicture:
            'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T14:30:00Z',
        replies: [
          {
            replyId: 1,
            replyText:
              'Thank you for your feedback! We are working on pricing.',
            replyUser: {
              userId: 4,
              username: 'Business Owner',
              profilePicture:
                'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            timestamp: '2025-02-08T14:00:00Z',
          },
        ],
      },
    ],
    contact: {
      phone: '123-456-7890',
      email: 'info@techfix.com',
    },
    images: [
      { id: 1, url: 'https://i.imgur.com/DMQHGA0.jpeg' },
      { id: 2, url: 'https://i.imgur.com/qrs9QBg.jpeg' },
      { id: 3, url: 'https://i.imgur.com/XVp8T1I.jpeg' },
      { id: 4, url: 'https://i.imgur.com/DMQHGA0.jpeg' },
      { id: 5, url: 'https://i.imgur.com/qrs9QBg.jpeg' },
      { id: 6, url: 'https://i.imgur.com/XVp8T1I.jpeg' },
    ],
    coverImages: ['https://i.imgur.com/DMQHGA0.jpeg'],
    openHours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 11:00 PM',
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
        user: {
          userId: 1,
          username: 'Jane Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T12:00:00Z', // Timestamp for the review
        replies: [
          {
            replyId: 1,
            replyText:
              'Thank you for your feedback! We are working on pricing.',
            replyUser: {
              userId: 4, // Business owner
              username: 'Business Owner',
              profilePicture:
                'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            timestamp: '2025-02-08T14:00:00Z', // Timestamp for the reply
          },
        ],
      },
      {
        reviewId: 2,
        rating: 2,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 2,
          username: 'John Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T13:00:00Z',
        replies: [],
      },
      {
        reviewId: 3,
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 3,
          username: 'Sam Smith',
          profilePicture:
            'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T14:30:00Z',
        replies: [],
      },
    ],
    contact: {
      phone: '987-654-3210',
      email: 'info@cafearoma.com',
    },
    images: [
      { id: 1, url: 'https://i.imgur.com/DMQHGA0.jpeg' },
      { id: 2, url: 'https://i.imgur.com/qrs9QBg.jpeg' },
      { id: 3, url: 'https://i.imgur.com/XVp8T1I.jpeg' },
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
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 1,
          username: 'Jane Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T12:00:00Z', // Timestamp for the review
        replies: [
          {
            replyId: 1,
            replyText:
              'Thank you for your feedback! We are working on pricing.',
            replyUser: {
              userId: 4, // Business owner
              username: 'Business Owner',
              profilePicture:
                'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            timestamp: '2025-02-08T14:00:00Z', // Timestamp for the reply
          },
        ],
      },
      {
        reviewId: 2,
        rating: 2,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 2,
          username: 'John Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T13:00:00Z',
        replies: [],
      },
      {
        reviewId: 3,
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 3,
          username: 'Sam Smith',
          profilePicture:
            'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T14:30:00Z',
        replies: [],
      },
    ],
    contact: {
      phone: '111-222-3333',
      email: 'info@fitprogym.com',
    },
    images: [
      { id: 1, url: 'https://i.imgur.com/DMQHGA0.jpeg' },
      { id: 2, url: 'https://i.imgur.com/qrs9QBg.jpeg' },
      { id: 3, url: 'https://i.imgur.com/XVp8T1I.jpeg' },
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
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 1,
          username: 'Jane Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T12:00:00Z', // Timestamp for the review
        replies: [
          {
            replyId: 1,
            replyText:
              'Thank you for your feedback! We are working on pricing.',
            replyUser: {
              userId: 4, // Business owner
              username: 'Business Owner',
              profilePicture:
                'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            timestamp: '2025-02-08T14:00:00Z', // Timestamp for the reply
          },
        ],
      },
      {
        reviewId: 2,
        rating: 2,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 2,
          username: 'John Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T13:00:00Z',
        replies: [],
      },
      {
        reviewId: 3,
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 3,
          username: 'Sam Smith',
          profilePicture:
            'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T14:30:00Z',
        replies: [],
      },
    ],
    contact: {
      phone: '555-555-5555',
      email: 'contact@greenthumb.com',
    },
    images: [
      { id: 1, url: 'https://i.imgur.com/DMQHGA0.jpeg' },
      { id: 2, url: 'https://i.imgur.com/qrs9QBg.jpeg' },
      { id: 3, url: 'https://i.imgur.com/XVp8T1I.jpeg' },
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
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 1,
          username: 'Jane Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T12:00:00Z', // Timestamp for the review
        replies: [
          {
            replyId: 1,
            replyText:
              'Thank you for your feedback! We are working on pricing.',
            replyUser: {
              userId: 4, // Business owner
              username: 'Business Owner',
              profilePicture:
                'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            timestamp: '2025-02-08T14:00:00Z', // Timestamp for the reply
          },
        ],
      },
      {
        reviewId: 2,
        rating: 2,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 2,
          username: 'John Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T13:00:00Z',
        replies: [],
      },
      {
        reviewId: 3,
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 3,
          username: 'Sam Smith',
          profilePicture:
            'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T14:30:00Z',
        replies: [],
      },
    ],
    contact: {
      phone: '555-666-7777',
      email: 'info@techhub.com',
    },
    images: [
      { id: 1, url: 'https://i.imgur.com/DMQHGA0.jpeg' },
      { id: 2, url: 'https://i.imgur.com/qrs9QBg.jpeg' },
      { id: 3, url: 'https://i.imgur.com/XVp8T1I.jpeg' },
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
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 1,
          username: 'Jane Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T12:00:00Z',
        replies: [
          {
            replyId: 1,
            replyText:
              'Thank you for your feedback! We are working on pricing.',
            replyUser: {
              userId: 4,
              username: 'Business Owner',
              profilePicture:
                'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            timestamp: '2025-02-08T14:00:00Z',
          },
        ],
      },
      {
        reviewId: 2,
        rating: 2,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 2,
          username: 'John Doe',
          profilePicture:
            'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T13:00:00Z',
        replies: [],
      },
      {
        reviewId: 3,
        rating: 1,
        comment: 'Great coffee, but a bit pricey.',
        user: {
          userId: 3,
          username: 'Sam Smith',
          profilePicture:
            'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        timestamp: '2025-02-08T14:30:00Z',
        replies: [],
      },
    ],
    contact: {
      phone: '555-777-8888',
      email: 'contact@petpalclinic.com',
    },
    images: [
      { id: 1, url: 'https://i.imgur.com/DMQHGA0.jpeg' },
      { id: 2, url: 'https://i.imgur.com/qrs9QBg.jpeg' },
      { id: 3, url: 'https://i.imgur.com/XVp8T1I.jpeg' },
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
