import React from 'react';
import './App.css';
import ContainerProducts from './components/containerProducts'
import Products from './components/products'
import store from "./redux/store";

export default function App() {

  const { cartReducer } = store.getState();
  const products = cartReducer.products;

  return (
    <ContainerProducts>
      {products.map((product) => {
        return (
          <Products key={product.id} id = {product.id} imgUrl={product.imgUrl} name = {product.name} price={product.price} description={product.description} category={product.category}/>
        );
      })}
    </ContainerProducts>
  );
}


