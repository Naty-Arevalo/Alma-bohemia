import {selectTotalQuantity} from '../../../store/carritoSlice'
import {useSelector} from 'react-redux'
import { IoMdCart } from "react-icons/io";
import './cartWidget.css'


const CartWidget = () => {
    const totalQuantity = useSelector(selectTotalQuantity)

  return (
    <div className='container-cart-widget'>
        <IoMdCart/>
        {totalQuantity > 0 && (
            <span className='quantity-cart'>{totalQuantity}</span>
        )}
        
    </div>
  )
}

export default CartWidget