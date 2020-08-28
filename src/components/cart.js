import React, { useRef, useEffect } from 'react'
import Store from '../redux/store'
import {showCart} from '../redux/actions'
import {addCart} from '../redux/actions'
import {deleteCart} from '../redux/actions'

function useOutsideAlerter(ref, id) {
    useEffect(() => {

        function click(event) {
            if (!ref.current.contains(event.target)) {
                Store.dispatch(showCart( false))
            }
        }

        document.addEventListener("mousedown", click);

        return () => {

            document.removeEventListener("mousedown", click);
        };
    }, [ref, id]);
}

export default function Cart(props){
    
    let id = 0;
    const ref = useRef(null);
    useOutsideAlerter(ref, props.id);

    let cart

    if(props.cart[0].length === 0)
    {
        cart = (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <h4>Carrito vacio</h4>
                </li>
               )
    }
    else
    {
        cart = props.cart[0].map((product)=> {
            return(
                    <li key={id++} className="list-group-item d-flex justify-content-between align-items-center">
                        <img className="" src={product.imgUrl} style={{width: '30px', height: '30px'}} alt="product" />
                        <p>{product.name}</p>
                        <button className="btn btn-primary" onClick={()=> Store.dispatch(addCart(product.id))}>+</button>
                        <span className="badge badge-primary badge-pill">{product.count}</span>
                        <button className="btn btn-primary" onClick={()=> Store.dispatch(deleteCart(product.id))}>-</button>
                    </li>
            )});
        cart.push(
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                     <p>{"Total: $"+props.cart[1].total.toString()}</p>   
                    </li>
                  )
    }
    
    return(
        <ul ref={ref} className="list-group position-absolute">
            {cart}
        </ul>
    )
}