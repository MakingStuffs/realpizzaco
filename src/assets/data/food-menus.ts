enum Diet {
  V = 'V',
  VG = 'VG',
  GF = 'GF',
}

interface Menu {
  name: string
  price: number
  description?: string
  diet?: Diet[]
}

interface MenusInterface {
  [key: string]: Menu[]
}

const FoodMenus: MenusInterface = {
  starters: [
    {
      name: 'Padron peppers',
      price: 5,
      diet: [Diet.V, Diet.VG],
    },
    {
      name: 'Garlic dough balls',
      price: 4.5,
      diet: [Diet.V],
    },
    {
      name: 'Mixed olives',
      price: 4,
      diet: [Diet.V, Diet.VG],
    },
    {
      name: 'Tomato, basil and manchego croquettes',
      price: 7.5,
      description: 'With salsa verde aioli',
      diet: [Diet.V],
    },
    {
      name: 'Garlic bread with Cheese',
      price: 5.5,
      diet: [Diet.V],
    },
    {
      name: 'Truffled mac N cheese',
      price: 8,
      description: 'With parmesan & parsley crumb',
      diet: [Diet.V],
    },
    {
      name: 'Classic bruschetta',
      price: 6,
      description: 'With cherry tomatoes, garlic, basil',
      diet: [Diet.V],
    },
    {
      name: 'Spicy buffalo chicken wings',
      price: 7,
      description: 'With blue cheese sauce (add holy f*ck sauce for 50p).',
    },
    {
      name: 'Spicy shakshuka',
      price: 7,
      description: 'With crumbled feta, herbs.',
    },
  ],
  pizza: [
    {
      name: 'Margherita',
      price: 9.5,
      description: 'Tomato, mozzarella',
      diet: [Diet.V],
    },
    {
      name: 'Portobello',
      price: 9,
      description: 'Mozzarella cheese base, Portobello mushroom, pine nuts',
      diet: [Diet.V],
    },
    {
      name: 'Diavolo',
      price: 12.5,
      description:
        'San Marzano tomato, fennel salami, peppers, chilli oil, black olives and mozzarella',
    },
    {
      name: 'Quattro Fromaggi',
      price: 10.5,
      description: 'Mozzarella, gorgonzola, parmesan and tallegio',
      diet: [Diet.V],
    },
    {
      name: 'Spicy Nduja',
      price: 12.5,
      description: 'Marzano tomato, mozzarella, spicy Nduja sausage',
    },
    {
      name: 'Proscuitto',
      price: 12.5,
      description: 'Marzano tomato, mozzarella, proscuitto',
    },
    {
      name: 'Fiorentina',
      price: 10.5,
      description: 'Marzano tomato, mozzarella, spinach, egg and parmesan',
    },
  ],
  drinks: [
    {
      name: 'Cappuccino',
      price: 2.5,
    },
    {
      name: 'Americano',
      price: 1.95,
    },
    {
      name: 'Latte',
      price: 2.5,
    },
    {
      name: 'Double espresso',
      price: 1.95,
    },
    {
      name: 'Breakfast tea',
      price: 1.5,
    },
    {
      name: 'Hot chocolate',
      price: 2.0,
    },
    {
      name: 'Coca Cola',
      price: 2.0,
      description: '330ml can',
    },
    {
      name: 'Diet Coke',
      price: 2.0,
      description: '330ml can',
    },
    {
      name: 'Still water',
      price: 1.5,
    },
    {
      name: 'Sparkling water',
      price: 1.5,
    },
    {
      name: 'Fruit juice',
      price: 2.5,
    },
  ],
  salads: [
    {
      name: 'Vegan kale Caesar',
      price: 11,
      description:
        'Olives, crispy chickpeas, parsnip crisps, nutritional yeast',
      diet: [Diet.V, Diet.VG],
    },
    {
      name: 'Classic chicken Caesar',
      price: 14.5,
      description: 'Olives, crispy bacon, croutons, Caesar sauce.',
    },
  ],
  sweets: [
    {
      name: 'Chocolate brownie',
      description: 'With berry coulis',
      price: 6,
    },
  ],
}
export default FoodMenus
