import React from 'react'
import Cart from '../Cart';


const Navigation = () => {
    return (
        <div style={{width:'100%', padding:'20px 0px', backgroundColor:'#1e1e1e', position:'fixed', top:0, zIndex:1}}>
            <div className="container">
                <div className="row">
                    <Cart/>
                </div>
            </div>
        </div>
    )
}

export default Navigation
