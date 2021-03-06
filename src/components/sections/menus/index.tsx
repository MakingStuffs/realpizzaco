import React, { useState, MouseEvent } from 'react'
import './style.scss'
import Card from '../../base/Card'
import Title from '../../base/Title'
import FoodMenus from '../../../assets/data/food-menus'
import PizzaImage from '../../../assets/images/pizza-image.jpg'

const Menus: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(FoodMenus.starters)
  const [menuTitle, setMenuTitle] = useState('Starters')

  const handleMenuChange = (event: MouseEvent): void => {
    const id = (event.target as HTMLButtonElement).id
    setActiveMenu(FoodMenus[id])
    setMenuTitle(id)
  }

  return (
    <div className="menu-section" id="menus">
      <div className="menu-image">
        <img src={PizzaImage} alt="Decorational image of pizza" />
      </div>
      <div className="menu-section__content">
        <Title content="Menus" />
        <nav className="menu-navigation">
          <button id="starters" onClick={handleMenuChange}>
            Starters
          </button>
          <button id="salads" onClick={handleMenuChange}>
            Salads
          </button>
          <button id="pizza" onClick={handleMenuChange}>
            Pizza
          </button>
          <button id="sweets" onClick={handleMenuChange}>
            Sweets
          </button>
          <button id="drinks" onClick={handleMenuChange}>
            Drinks
          </button>
        </nav>
        <Card>
          <Title content={menuTitle} />
          {activeMenu.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="menu-item__name">
                <p>{item.name}</p>
                {item.diet && (
                  <div className="menu-item__diet-tabs">
                    {item.diet.map((diet, i) => (
                      <span className="menu-item__diet" key={`diet-${i}`}>
                        ({diet})
                      </span>
                    ))}
                  </div>
                )}
                <span>£{item.price}</span>
              </div>
              <p className="menu-item__description">{item.description}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}

export default Menus
