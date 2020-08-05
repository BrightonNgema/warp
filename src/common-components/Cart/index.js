import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../utils/cartContext';
import './cart.css';

const Cart = () => {
    const [cart, setCart] =  React.useContext(CartContext)
    const [open, setOpen] = React.useState(false)

    const removeVehicle = (item) => {
        setCart(curreCart => curreCart.filter((i) => {return i.id !== item.id}))
    }

    return (
        <div className="col-auto ml-auto">
            <div style={{position:'relative'}}>
                <div className="clickable" onClick={() =>  setOpen(true)} >
                    <div className="cart-counter">
                        <div style={{margin:'auto', fontSize:10, color:'#fff', fontWeight:'bold'}}>
                            {cart.length}
                        </div>
                    </div>
                    <FontAwesomeIcon className="clickable" icon={faShoppingCart} color="#fff"/> 
                </div>
            
            {open && (
                <div className="cart-container">
                    <div>
                        <FontAwesomeIcon 
                            className="clickable" 
                            onClick={() =>  setOpen(false)} icon={faTimes} 
                            style={{position:'absolute', top:5, right:5, }}
                        />
                    </div>
                    <div className="mt-5 ml-2">
                        {cart.length === 0 && <p>Cart is Empty</p>}
                        {cart.length > 0 && (
                            cart.map((item) => (
                            <div key={item.id} className="row" style={{paddingBottom:5}}>
                                <div className="col-10"> {item.manufacturer} - {item.model}</div>
                                <div className="col-2 ml-auto"> 
                                    <FontAwesomeIcon onClick={() =>  removeVehicle(item)} icon={faTimes} className="clickable"/> 
                                </div>
                                <hr style={{width:'90%'}} />
                            </div>
                        )))}
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Cart
