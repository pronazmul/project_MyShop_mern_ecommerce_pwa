const Products = [
  // men
  {
    name: 'Men’s Polo Shirt',
    images: [
      'https://i.ibb.co/yh23SQ0/Cotton-Polo-Shirt-2-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
    description:
      'Men’s Cotton Casual T-Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'topten',
    category: 'men',
    price: 499.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 0,
  },
  {
    name: 'Tipping Collar Polo shirt',
    images: [
      'https://i.ibb.co/KxHMZJV/Cotton-Polo-Shirt-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
    description:
      'Men’s Cotton Casual T-Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'denim',
    category: 'men',
    price: 399.0,
    countInStock: 5,
    rating: 5.0,
    numReviews: 0,
  },
  {
    name: 'Men’s Casual T-Shirt',
    images: [
      'https://i.ibb.co/QHcYKjP/Blue-Cotton-Polo-Shirt-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
    description:
      'Men’s Cotton Casual T-Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'easy',
    category: 'men',
    price: 599.0,
    countInStock: 7,
    rating: 3.0,
    numReviews: 0,
  },
  {
    name: 'Casual Full Sleve Shirt',
    images: [
      'https://i.ibb.co/vvCq2zS/IMG-5202-3-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
    description:
      'Men’s Cotton Casual Full-Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'topten',
    category: 'men',
    price: 499.0,
    countInStock: 10,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Gray Black Jeans Pant',
    images: [
      'https://i.ibb.co/jTYSxj5/IMG-5230-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
    description:
      'Men’s Cotton Casual Pant Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'denim',
    category: 'men',
    price: 999.0,
    countInStock: 10,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Off White Grammen Full Shirt',
    images: [
      'https://i.ibb.co/Z6xMz5x/IMG-5246-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
    description:
      'Men’s Cotton Casual Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'easy',
    category: 'men',
    price: 1199.0,
    countInStock: 10,
    rating: 5.0,
    numReviews: 0,
  },
  {
    name: 'Yellow Full Sleve Shirt',
    images: [
      'https://i.ibb.co/VVKnN7p/IMG-5275-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
    description:
      'Men’s Cotton Casual Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'topten',
    category: 'men',
    price: 1499.0,
    countInStock: 7,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'White Flower Sleve Shirt',
    images: [
      'https://i.ibb.co/f4p9Gkh/IMG-5280-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
    description:
      'Men’s Cotton Casual Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'denim',
    category: 'men',
    price: 1299.0,
    countInStock: 10,
    rating: 5.0,
    numReviews: 0,
  },
  {
    name: 'Cotton Full Sleve Shirt',
    images: [
      'https://i.ibb.co/cLbXzTG/IMG-5304-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
    description:
      'Men’s Cotton Casual Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'easy',
    category: 'men',
    price: 999.0,
    countInStock: 8,
    rating: 2.5,
    numReviews: 0,
  },
  {
    name: 'Black flower Full Sleve Shirt',
    images: [
      'https://i.ibb.co/HVP6BJN/IMG-5331-1-768x768.webp',
      'https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp',
    ],
    description:
      'Men’s Cotton Casual Shirt Made In China. Men’s Cotton Casual T-Shirt',
    brand: 'topten',
    category: 'men',
    price: 799.0,
    countInStock: 7,
    rating: 4.5,
    numReviews: 0,
  },
  // Women
  {
    name: 'Ladies Jeans Pant',
    images: [
      'https://i.ibb.co/zN7wkVL/IMG-5192-scaled.jpg',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
    description:
      'Ladies Cotton Casual T-Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'topten',
    category: 'women',
    price: 499.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 0,
  },
  {
    name: 'Ladies Kurti',
    images: [
      'https://i.ibb.co/fvH9R4Z/IMG-5366-scaled.jpg',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
    description:
      'Ladies Cotton Casual T-Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'denim',
    category: 'women',
    price: 399.0,
    countInStock: 5,
    rating: 5.0,
    numReviews: 0,
  },
  {
    name: 'Ladies Mid Length Tops',
    images: ['https://i.ibb.co/sKX8Xd2/IMG-5457-scaled.jpg'],
    description:
      'Ladies Cotton Casual T-Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'easy',
    category: 'women',
    price: 599.0,
    countInStock: 7,
    rating: 3.0,
    numReviews: 0,
  },
  {
    name: 'Ladies Western Length Tops',
    images: [
      'https://i.ibb.co/f1kpH0M/IMG-5529-scaled.jpg',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
    description:
      'Ladies Cotton Casual Full-Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'topten',
    category: 'women',
    price: 499.0,
    countInStock: 10,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Ladies Jeans Pant',
    images: [
      'https://i.ibb.co/q1D3HP5/IMG-5589-768x768.webp',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
    description:
      'Ladies Cotton Casual Pant Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'denim',
    category: 'women',
    price: 999.0,
    countInStock: 10,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Ladies Black Tops',
    images: [
      'https://i.ibb.co/ZT7ZZxC/IMG-5597-768x768.webp',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
    description:
      'Ladies Cotton Casual Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'easy',
    category: 'women',
    price: 1199.0,
    countInStock: 10,
    rating: 5.0,
    numReviews: 0,
  },
  {
    name: 'Western Ladies Jeans Pant',
    images: [
      'https://i.ibb.co/mcb4yrT/IMG-5614-768x768.webp',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
    description:
      'Ladies Cotton Casual Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'topten',
    category: 'women',
    price: 1499.0,
    countInStock: 7,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Ladis Full Sleve Top',
    images: [
      'https://i.ibb.co/RSWfZpY/IMG-5621-768x768.webp',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
    description:
      'Ladies Cotton Casual Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'denim',
    category: 'women',
    price: 1299.0,
    countInStock: 10,
    rating: 5.0,
    numReviews: 0,
  },
  {
    name: 'Ladies Kurti',
    images: [
      'https://i.ibb.co/0VS1P18/IMG-5639-768x768.webp',
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
    ],
    description:
      'Ladies Cotton Casual Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'easy',
    category: 'women',
    price: 999.0,
    countInStock: 8,
    rating: 2.5,
    numReviews: 0,
  },
  {
    name: 'Ladies Mid Length Set',
    images: [
      'https://i.ibb.co/8KKpWY2/IMG-5657-768x768.webp',
      'https://i.ibb.co/0VS1P18/IMG-5639-768x768.webp',
    ],
    description:
      'Ladies Cotton Casual Shirt Made In China. Ladies Cotton Casual T-Shirt',
    brand: 'topten',
    category: 'women',
    price: 799.0,
    countInStock: 7,
    rating: 4.5,
    numReviews: 0,
  },
  // Kids
  {
    name: 'Baby Party Frock',
    images: [
      'https://i.ibb.co/X4b3Q8y/IMG-4900-768x768.webp',
      'https://i.ibb.co/nfhvkbm/IMG-4895-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'topten',
    category: 'kids',
    price: 2100.0,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Girls Frock Indian',
    images: [
      'https://i.ibb.co/M8vJjJF/IMG-4907-768x768.webp',
      'https://i.ibb.co/m4G8RQX/IMG-4920-1-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'denim',
    category: 'kids',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Boys Complete Set',
    images: [
      'https://i.ibb.co/92yzg60/IMG-4917-768x768.webp',
      'https://i.ibb.co/NjDdznP/IMG-4928-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'denim',
    category: 'kids',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Boys Eid Dress',
    images: [
      'https://i.ibb.co/T1VYrMt/IMG-4942-768x768.webp',
      'https://i.ibb.co/5BW1n7T/IMG-4932-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'topten',
    category: 'kids',
    price: 500.0,
    countInStock: 4,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Girls Perty Frock',
    images: [
      'https://i.ibb.co/Ws5VZF8/IMG-4953-768x768.webp',
      'https://i.ibb.co/m6Pw6R7/IMG-4937-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'denim',
    category: 'kids',
    price: 500.0,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Girls Grown Indian',
    images: [
      'https://i.ibb.co/x1pX5Dd/IMG-4974-768x768.webp',
      'https://i.ibb.co/xLLJX4d/IMG-4991-1-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'denim',
    category: 'kids',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Baby Party Frock',
    images: [
      'https://i.ibb.co/HKVdwC1/IMG-5019-768x768.webp',
      'https://i.ibb.co/8KZ5k01/IMG-5096-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'topten',
    category: 'kids',
    price: 200.0,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Girls Frock Indian',
    images: [
      'https://i.ibb.co/jRHWW42/IMG-5178-768x768.webp',
      'https://i.ibb.co/84Dmhrx/IMG-5248-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'denim',
    category: 'kids',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Boys Complete Set',
    images: [
      'https://i.ibb.co/3cr1gwh/IMG-5259-768x768.webp',
      'https://i.ibb.co/CMHvbL9/IMG-5295-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'denim',
    category: 'kids',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  // shoes
  {
    name: 'Black Leather Shoe',
    images: [
      'https://i.ibb.co/nkcxD9J/Black-Lace-up-Shoe-for-Men-768x768.webp',
      'https://i.ibb.co/wLj9dsw/Black-Lace-up-Shoe-for-Men-Inner-768x768.webp',
    ],
    description:
      'Black leather loafer. Features comfortable Soft Doctor Sole, Made In China.',
    brand: 'apex',
    category: 'shoes',
    price: 2100.0,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Black Leather Loafer',
    images: [
      'https://i.ibb.co/hm0Qwrt/Black-Leather-Loafer-768x768.webp',
      'https://i.ibb.co/X3ZkHg3/Black-Oxford-Shoe-for-Men-Inner-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'bata',
    category: 'shoes',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Black Oxford Shoe',
    images: [
      'https://i.ibb.co/nzz5FW1/Black-Oxford-Shoe-for-Men-768x768.webp',
      'https://i.ibb.co/X3ZkHg3/Black-Oxford-Shoe-for-Men-Inner-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'lotto',
    category: 'shoes',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Brown Casual Loafer',
    images: [
      'https://i.ibb.co/1G2jGY2/Brown-Casual-Loafer-for-Men-Inner-2-768x768.webp',
      'https://i.ibb.co/6ZW1jts/Brown-Casual-Loafer-for-Men-768x768.webp',
    ],
    description:
      'Black leather loafer. Features comfortable Soft Doctor Sole, Made In China.',
    brand: 'apex',
    category: 'shoes',
    price: 2100.0,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Brown Dress Shoes',
    images: [
      'https://i.ibb.co/jyJ4prF/Brown-Dress-Shoe-for-Men-Inner-768x768.webp',
      'https://i.ibb.co/84vvsnH/Brown-Dress-Shoe-for-Men-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'bata',
    category: 'shoes',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Brown Lace Up Shoe',
    images: [
      'https://i.ibb.co/hBqwNyq/Brown-Lace-up-Shoe-for-Men-Inner-768x768.webp',
      'https://i.ibb.co/XXvLzBV/Brown-Lace-up-Shoe-for-Men-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'lotto',
    category: 'shoes',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Golden Ladis Shoes',
    images: [
      'https://i.ibb.co/CtBKBS8/Golden-Color-Ladies-Shoes-768x768.webp',
      'https://i.ibb.co/5Ff5ntG/Golden-Ladies-Shoes-inner-image-768x768.webp',
    ],
    description:
      'Black leather loafer. Features comfortable Soft Doctor Sole, Made In China.',
    brand: 'apex',
    category: 'shoes',
    price: 2100.0,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Brown Leather Lofer',
    images: [
      'https://i.ibb.co/NFPCvdT/Brown-Leather-Loafer-2-768x768.webp',
      'https://i.ibb.co/ggChZkM/Brown-Leather-Loafer-2-Inner-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'bata',
    category: 'shoes',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Casual Black Leather',
    images: [
      'https://i.ibb.co/xCfrBw0/Casual-Black-Leather-Loafer-for-Men-Inner-768x768.webp',
      'https://i.ibb.co/wsBcJS6/Casual-Black-Leather-Loafer-for-Men-768x768.webp',
    ],
    description:
      'Light Pink Georgette frog with Light pink Embroidery Made In China. Light Pink Georgette frock',
    brand: 'lotto',
    category: 'shoes',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  // Cosmetics
  {
    name: 'Finesse Restore Shampoo',
    images: [
      'https://i.ibb.co/9Gsd3XM/Finesse-Restore-Strengthen-Shampoo-443ml-1-768x768.webp',
    ],
    description:
      'FINESSE Restore + Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'finesse',
    category: 'cosmetics',
    price: 200.0,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Fogg Blue Forest Scalled',
    images: ['https://i.ibb.co/d6dBwD4/Fogg-Bleu-Forest-scaled-600x600.webp'],
    description:
      'a man who is synonymous with fashion, style, sport and success, comes a body spray infused with the aromatic fougère scent of David Beckham Beyond Forever.',
    brand: 'fogg',
    category: 'cosmetics',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Apple Cocktail Shower Gel',
    images: ['https://i.ibb.co/g6CQS6p/apple-cocktail-shower-gel.webp'],
    description:
      'Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'apple',
    category: 'cosmetics',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Dabur Gulabari Rose Water',
    images: [
      'https://i.ibb.co/2YMD38t/dabur-gulabari-premium-rose-water-768x768.webp',
    ],
    description:
      'FINESSE Restore + Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'dabur',
    category: 'cosmetics',
    price: 200.0,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Dabur Vatika Lemon Hair Oil',
    images: [
      'https://i.ibb.co/qyM0JkL/Dabur-Vatika-Hair-Oil-150m-L-768x768.webp',
    ],
    description:
      'a man who is synonymous with fashion, style, sport and success, comes a body spray infused with the aromatic fougère scent of David Beckham Beyond Forever.',
    brand: 'dabur',
    category: 'cosmetics',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Dabur Vatika Cocunut Hair Oil',
    images: ['https://i.ibb.co/dB65Yq4/Dabur-Vatika-Hair-Oil-768x768.webp'],
    description:
      'Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'dabur',
    category: 'cosmetics',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Clinic Plus Shampoo',
    images: ['https://i.ibb.co/MZvShdL/CLINIC-Plus-Shampoo-768x768.webp'],
    description:
      'a man who is synonymous with fashion, style, sport and success, comes a body spray infused with the aromatic fougère scent of David Beckham Beyond Forever.',
    brand: 'clinic-plus',
    category: 'cosmetics',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Clinic Plus Strong Shampoo-175',
    images: [
      'https://i.ibb.co/4Z0nqCt/clinic-plus-strong-and-long-health-shampoo-175ml.webp',
    ],
    description:
      'Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'clinic-plus',
    category: 'cosmetics',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'David Beckhum Respect',
    images: ['https://i.ibb.co/yQyCnyJ/david-beckham-respect-768x768.webp'],
    description:
      'a man who is synonymous with fashion, style, sport and success, comes a body spray infused with the aromatic fougère scent of David Beckham Beyond Forever.',
    brand: 'david-beckham',
    category: 'cosmetics',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'David Beckhum Respect Scaled',
    images: [
      'https://i.ibb.co/VmtqYHT/david-beckham-respect-scaled-600x600.webp',
    ],
    description:
      'Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'david-beckham',
    category: 'cosmetics',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  // Accessories
  {
    name: 'Casual Black Belt',
    images: ['https://i.ibb.co/xzgF7JG/black-calual-belt.jpg'],
    description:
      'FINESSE Restore + Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'lotto',
    category: 'accessories',
    price: 200.0,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Formal Black & Brown Belt',
    images: ['https://i.ibb.co/Wk24Zft/black-brown-formal-belt.jpg'],
    description:
      'a man who is synonymous with fashion, style, sport and success, comes a body spray infused with the aromatic fougère scent of David Beckham Beyond Forever.',
    brand: 'bata',
    category: 'accessories',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Brown Formal Belt',
    images: ['https://i.ibb.co/CPJt4YX/brown-formal-belt.jpg'],
    description:
      'Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'apex',
    category: 'accessories',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Brown Leather wallet',
    images: ['https://i.ibb.co/Qf8V0kP/brown-wallet.jpg'],
    description:
      'FINESSE Restore + Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'lotto',
    category: 'accessories',
    price: 200.0,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Light Black Wallet',
    images: ['https://i.ibb.co/kmnr71Y/light-black-wallet.jpg'],
    description:
      'a man who is synonymous with fashion, style, sport and success, comes a body spray infused with the aromatic fougère scent of David Beckham Beyond Forever.',
    brand: 'bata',
    category: 'accessories',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Black Leather wallet',
    images: ['https://i.ibb.co/nL5qGPX/black-wallet.jpg'],
    description:
      'Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'apex',
    category: 'accessories',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Simple Reading Glass ',
    images: ['https://i.ibb.co/2KWyWdq/reading-glass.jpg'],
    description:
      'FINESSE Restore + Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'zoffani',
    category: 'accessories',
    price: 200.0,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Modern Eye Glass',
    images: ['https://i.ibb.co/KzykPZ3/styling-glass.webp'],
    description:
      'a man who is synonymous with fashion, style, sport and success, comes a body spray infused with the aromatic fougère scent of David Beckham Beyond Forever.',
    brand: 'zoffani',
    category: 'accessories',
    price: 100.0,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Kids Fusion Glass',
    images: ['https://i.ibb.co/87f0Yq7/kids-glass.jpg'],
    description:
      'Strengthen Enhancing Shampoo For Hair thats Dry, Stubborn Or Sometimes Frizzy, Stronger, & More Alive.',
    brand: 'zoffani',
    category: 'accessories',
    price: 300.0,
    countInStock: 8,
    rating: 3.5,
    numReviews: 0,
  },
]

const Peoples = [
  {
    name: 'Nazmul Huda',
    mobile: '01746243302',
    password: 'Nazmul@01',
    role: 'admin',
  },
  {
    name: 'Billal Hossain',
    mobile: '01746243303',
    password: 'Billal@01',
  },
]

module.exports = { Products, Peoples }
