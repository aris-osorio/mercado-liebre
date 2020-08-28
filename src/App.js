import React from 'react';
import Title from './components/title'
import CartButton from './components/cartButton'
import Cart from './components/cart'
import ContainerProducts from './components/containerProducts'
import Products from './components/products'
import store from "./redux/store";
import './App.css';

export default function App() {

  let { cartReducer } = store.getState();
  let products = cartReducer.products;

  let cartButton = [(<CartButton key={1} totalItems={cartReducer.cart[2].totalItems}/>)]
 
  if(cartReducer.showCart === true)
  {
    cartButton.push(<Cart key ={2} cart = { cartReducer.cart } />)
  }
  

  return (
    <div className="App">
      <Title >
        {cartButton}
      </Title>
      <ContainerProducts>
        {products.map((product) => {
          return (
            <Products key={product.id} id={product.id} imgUrl={product.imgUrl} name={product.name} price={product.price} description={product.description} category={product.category} />
          );
        })}
      </ContainerProducts>
    </div>
  );
}


