import React from 'react'
import { CartContext } from '../../utils/cartContext';



const VehicleCard = ({item}) => {
    const [cart, setCart] =  React.useContext(CartContext)
    const imageUrl = 'https://warpfrontendtestserver.herokuapp.com/public/'


    const addToCart = (item) => {
        const alreadyAdded = cart.find((i) => i.id === item.id)
        if(alreadyAdded){
            return alert('Vehicle already added to Cart')
        }
        return setCart(currCart => [...currCart, item])
    }

    
    const image = imageUrl+item.manufacturer+"_"+item.model+'.jpg';
    return (
        <div className="card mb-3" style={{backgroundColor:'#1e1e1e'}}>
                <div className="row no-gutters">
                    <div className="col-md-5" style={{backgroundPosition:'center',backgroundRepeat:'no-repeat', backgroundSize:'contain', padding:10}}>
                        <img alt={item.manufacturer+"_"+item.model} src={image} style={{height:'100%', width:'100%'}}/>        
                    </div>
                    <div className="col-md-7">
                        <div className="card-body" style={{color:'#fff'}}>
                        <p className="card-text">R {item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1, ')}</p>
                            <div className="card-text">Make: {item.manufacturer}</div>
                            <div className="card-text">Model: {item.model}</div>
                            <div className="card-text">Body: {item.body}</div>

                    <div style={{ flexDirection:'column', display:'flex'}}>
                        <div className="mt-auto ml-auto mr-1 mb-1">
                            <button className="my-button" onClick={() => addToCart(item)}>ADD TO CART</button>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default VehicleCard
