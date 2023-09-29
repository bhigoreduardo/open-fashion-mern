import { formatDate } from './format'

// CATEGORY
export const category = {
  id: 1,
  name: 'Roupas',
  mainCategory: '-',
  description: 'lorem ipsum et dolor al',
  typeCategory: 'Produtos',
  image: 'https://placehold.co/300x300',
}
export const subCategory = {
  id: 1,
  name: 'Roupas',
  mainCategory: [
    {
      name: 'Roupas',
      mainCategory: [{ name: 'Roupas' }],
    },
    {
      name: 'Roupas',
    },
  ],
  description: 'lorem ipsum et dolor al',
  typeCategory: 'Produtos',
  image: 'https://placehold.co/300x300',
}
export const categories = new Array(5).fill(category)
export const subCategories = new Array(5).fill(subCategory)
export const parsedCategories = categories.map((item) => ({
  id: item.id,
  value: item.name,
}))

// PRODUCT
export const product = {
  id: 1,
  category: 'Roupas',
  name: 'A4TECH BH300 Bluetooth Wireless Headset',
  sku: 'CSJ0158',
  stock: 10,
  price: 560,
  sales: 120,
  rating: {
    avg: 4.2,
    count: 50,
  },
  image: 'https://placehold.co/300x300',
  createdAt: formatDate(new Date().toString()),
}
export const products = new Array(5).fill(product)

// CUSTOMER
export const customer = {
  id: 1,
  name: 'Shaikh Abu Dardah',
  email: 'shaikhabudardah@email.com',
  phone: '12345689',
  address: {
    street: 'Dhaka',
    neighborhood: 'Dhaka Sardah',
    city: 'Sardah',
    state: 'DA',
    number: 'S/N',
    zipCode: 12563,
    complement: 'Dhaka DA',
  },
  orders: 2,
  amountSpend: 167.89,
  active: true,
  online: true,
  lastActive: formatDate(new Date().toString()),
  createdAt: formatDate(new Date().toString()),
}
export const customers = new Array(5).fill(customer)

// ORDER
export const order = {
  id: 1,
  trackCode: '#23123',
  customer: {
    name: 'Shaikh Abu Dardah',
    phone: '12345689',
  },
  status: 'pending',
  amount: 256,
  productAmount: 12,
  paymentMethod: 'cash-on',
  deliveryStatus: 'delivered',
  createdAt: formatDate(new Date().toString()),
}
export const orders = new Array(5).fill(order)
