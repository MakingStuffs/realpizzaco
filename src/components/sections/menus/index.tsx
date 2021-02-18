import React, { useState, MouseEvent } from 'react'
import './style.scss'
import Card from '../../base/Card'
import Title from '../../base/Title'
import FoodMenus from '../../../assets/data/food-menus'

const Menus: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(FoodMenus.starters)
  const [menuTitle, setMenuTitle] = useState('Starters')

  const handleMenuChange = (event: MouseEvent): void => {
    const id = (event.target as HTMLButtonElement).id
    setActiveMenu(FoodMenus[id])
    setMenuTitle(id)
  }

  return (
    <div className="menu-section">
      <Title content="Menus" />
      <nav className="menu-navigation">
        <button id="starters" onClick={handleMenuChange}>
          Starters
        </button>
        <button id="pizza" onClick={handleMenuChange}>
          Pizza
        </button>
        <button id="drinks" onClick={handleMenuChange}>
          Drinks
        </button>
      </nav>
      <Card>
        <Title content={menuTitle} />
        {activeMenu.map((item, i) => (
          <div key={i} className="menu-item">
            <p className="menu-item__name">
              {item.name}
              {item.diet &&
                item.diet.map((diet, i) => (
                  <span className="menu-item__diet" key={`diet-${i}`}>
                    ({diet})
                  </span>
                ))}
              <span>£{item.price}</span>
            </p>
            <p className="menu-item__description">{item.description}</p>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default Menus
