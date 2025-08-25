
import Filters from '../Filters'

const Header = () => {
  return (
    <header>
    <h1> Header</h1>
    <div>
    <Filters/>
    </div>
    <div>
      <span className="material-symbols-outlined">shopping_cart</span>
    </div>
    

    </header>
  )
}

export default Header