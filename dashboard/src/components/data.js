//Dashboard Nasted Sidebar Links
export const dashBoardDSidebarLinks = [
  {
    id: 1,
    name: 'Dashboard',
    sublink: 'dashboard',
    icon: 'fas fa-tachometer-alt',
    active: false,
    nasted: false,
    subCategory: [],
  },
  {
    id: 2,
    name: 'Manage Products',
    sublink: 'all_products',
    icon: 'fas fa-shopping-cart',
    active: false,
    nasted: true,
    subCategory: [
      { name: 'All Products', sublink: 'all_products' },
      { name: 'Add Product', sublink: 'add_product' },
      { name: 'Out of Stock', sublink: 'out_of_stock' },
    ],
  },
  {
    id: 3,
    name: 'Manage Orders',
    sublink: 'all_orders',
    icon: 'fas fa-gift',
    active: false,
    nasted: true,
    subCategory: [
      { name: 'All Orders', sublink: 'all_orders' },
      { name: 'Cancelled Orders', sublink: 'cancelled_orders' },
      { name: 'Pending Orders', sublink: 'pending_orders' },
    ],
  },
  {
    id: 4,
    name: 'Manage User',
    sublink: 'all_users',
    icon: 'fas fa-user-tie',
    active: false,
    nasted: true,
    subCategory: [
      { name: 'All Users', sublink: 'all_users' },
      { name: 'Add User', sublink: 'add_user' },
      { name: 'Suspanded Users', sublink: 'suspanded_users' },
      { name: 'Pending Requests', sublink: 'pending_requests' },
    ],
  },
  {
    id: 5,
    name: 'Manage Customers',
    sublink: 'all_customers',
    icon: 'fas fa-users',
    active: false,
    nasted: true,
    subCategory: [
      { name: 'All Customers', sublink: 'all_customers' },
      { name: 'Customers Review', sublink: 'customers_review' },
    ],
  },
  {
    id: 6,
    name: 'Logout',
    sublink: 'logout',
    icon: 'fas fa-power-off',
    active: false,
    nasted: false,
    subCategory: [],
  },
]

// Admin Features Summery Json
export const adminSummery = [
  {
    id: 1,
    title: 'Earninigs',
    subtitle: '2000',
    icon: 'fas fa-dollar-sign',
  },
  {
    id: 2,
    title: 'Orders',
    subtitle: '50',
    icon: 'fas fa-gift',
  },
  {
    id: 3,
    title: 'Products',
    subtitle: '500',
    icon: 'fas fa-luggage-cart',
  },
  {
    id: 4,
    title: 'Shippied',
    subtitle: '10',
    icon: 'fas fa-shipping-fast',
  },
  {
    id: 5,
    title: 'Admins',
    subtitle: '02',
    icon: 'fas fa-user-secret',
  },
  {
    id: 6,
    title: 'Modarators',
    subtitle: '10',
    icon: 'fas fa-user-tie',
  },
  {
    id: 7,
    title: 'Customers',
    subtitle: '200',
    icon: 'fas fa-users',
  },
  {
    id: 8,
    title: 'Out of Stock',
    subtitle: '90',
    icon: 'fas fa-shopping-basket',
  },
]

// Custom Radio Check Json
export const computerRadioData = [
  {
    id: 1,
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    id: 2,
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    id: 3,
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]

// Dummy Accordion Data
export const accrodionData = [
  {
    id: 1,
    name: 'What is your Privacy Policy',
    desciption:
      'publishing and graphic design, Lorem ipsum is a placeholder text',
  },
  {
    id: 2,
    name: 'What is your refund policy?',
    desciption:
      'publishing and graphic design, Lorem ipsum is a placeholder text',
  },
  {
    id: 3,
    name: 'What is your service quality?',
    desciption:
      'publishing and graphic design, Lorem ipsum is a placeholder text',
  },
]

// Table Entities Array Data
export const entitiesData = [10, 25, 50, 100]

// Dashbord Profile Dropdown Data
export const userDropDownData = [
  {
    id: 1,
    title: 'Profile',
    sublink: '/',
    icon: 'fas fa-user-secret',
  },
  {
    id: 2,
    title: 'Logout',
    sublink: '/',
    icon: 'fas fa-power-off',
  },
]

// Dashbord Profile Dropdown Data
export const productListDropdown = [
  {
    id: 1,
    title: 'View',
    sublink: '/',
    icon: 'fas fa-eye',
  },
  {
    id: 2,
    title: 'Edit',
    sublink: '/',
    icon: 'fas fa-edit',
  },
  {
    id: 3,
    title: 'Delete',
    sublink: '/',
    icon: 'far fa-trash-alt',
  },
]

// Category JSON Demo
export const categories = [
  {
    id: 1,
    name: 'men',
    thumb: '',
    sub: [
      {
        id: 1,
        name: 'Shirt',
        thumb: '',
        sub: [
          {
            id: 1,
            name: 'Casual Shirt',
            thumb: '',
            sub: [],
          },
          {
            id: 2,
            name: 'Formal Shirt',
            thumb: '',
            sub: [],
          },
          {
            id: 3,
            name: 'Slim Shirt',
            thumb: '',
            sub: [],
          },
        ],
      },
      {
        id: 2,
        name: 'T-Shirt',
        thumb: '',
        sub: [],
      },
      {
        id: 3,
        name: 'Panjabi',
        thumb: '',
        sub: [],
      },
    ],
  },
  {
    id: 2,
    name: 'women',
    thumb: '',
    sub: [
      {
        id: 1,
        name: 'Saree',
        thumb: '',
        sub: [
          {
            id: 1,
            name: 'Jamdani',
            thumb: '',
            sub: [],
          },
          {
            id: 2,
            name: 'Katan',
            thumb: '',
            sub: [],
          },
          {
            id: 3,
            name: 'Silk',
            thumb: '',
            sub: [],
          },
        ],
      },
      {
        id: 2,
        name: 'Jeans',
        thumb: '',
        sub: [],
      },
      {
        id: 3,
        name: 'Kurti',
        thumb: '',
        sub: [],
      },
      {
        id: 4,
        name: 'Top',
        thumb: '',
        sub: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Kids',
    thumb: '',
    sub: [
      {
        id: 1,
        name: 'Baby',
        thumb: '',
        sub: [],
      },
      {
        id: 2,
        name: 'Boys',
        thumb: '',
        sub: [],
      },
      {
        id: 3,
        name: 'Girls',
        thumb: '',
        sub: [],
      },
    ],
  },
  {
    id: 4,
    name: 'Shoes',
    thumb: '',
    sub: [
      {
        id: 1,
        name: 'Mens',
        thumb: '',
        sub: [],
      },
      {
        id: 2,
        name: 'Womens',
        thumb: '',
        sub: [],
      },
    ],
  },
  {
    id: 5,
    name: 'Cosmetics',
    thumb: '',
    sub: [
      {
        id: 1,
        name: 'Mens Care',
        thumb: '',
        sub: [],
      },
      {
        id: 2,
        name: 'Womens Care',
        thumb: '',
        sub: [],
      },
      {
        id: 3,
        name: 'Baby Care',
        thumb: '',
        sub: [],
      },
      {
        id: 4,
        name: 'Oral Care',
        thumb: '',
        sub: [],
      },
    ],
  },
]
