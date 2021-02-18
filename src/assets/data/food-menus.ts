enum Diet {
  V = 'V',
  VG = 'VG',
  GF = 'GF',
}

interface Menu {
  name: string
  price: number
  description: string
  diet?: [Diet]
}

interface MenusInterface {
  [key: string]: Menu[]
}

const FoodMenus: MenusInterface = {
  starters: [
    {
      name: 'A Starter',
      price: 23,
      description: 'test',
      diet: [Diet.V],
    },
    {
      name: 'test',
      price: 23,
      description: 'test',
    },
    {
      name: 'test',
      price: 23,
      description: 'test',
    },
  ],
  pizza: [
    {
      name: 'A Pizza',
      price: 23,
      description: 'test',
      diet: [Diet.V],
    },
    {
      name: 'test',
      price: 23,
      description: 'test',
    },
    {
      name: 'test',
      price: 23,
      description: 'test',
    },
  ],
  drinks: [
    {
      name: 'A Drink',
      price: 23,
      description: 'test',
      diet: [Diet.V],
    },
    {
      name: 'test',
      price: 23,
      description: 'test',
    },
    {
      name: 'test',
      price: 23,
      description: 'test',
    },
  ],
}
export default FoodMenus
