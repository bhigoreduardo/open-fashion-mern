// CUSTOMER
export const customer = {
  id: 1,
  name: 'Shaikh Abu Dardah',
  email: 'shaikhabudardah@email.com',
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
  lastActive: new Date(),
  createdAt: new Date(),
}

// CATEGORY
export const category = {
  id: 1,
  name: 'Roupas',
  mainCategory: '-',
  description: 'lorem ipsum et dolor al',
  typeCategory: 'Produtos',
  image: 'https://placehold.co/300x300',
}
export const categories = new Array(5).fill(category)
export const parsedCategories = categories.map((item) => ({ id: item.id, value: item.name }))
