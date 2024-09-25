import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import getProducts from '../redux/action';
import { useState } from 'react';

const Main = () => {
  const dispatch = useDispatch()
  const [inputValue,setImputValue] = useState('')
 
  


  useEffect(() => {
    dispatch(getProducts())
  }, [])
  
  const products = useSelector((store) => store.products)
  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(inputValue.toLocaleLowerCase()))
  console.log(products);
  



  const addToBasket = (product) => {
    dispatch( {type: "SET_PRODUCT_TO_BASKET", product: product} )
  }
  
  return (
    <div>
      <div style={{display: 'flex',alignItems:'center',gap:'10px'}}>
          <h1>Products</h1>
          <input type="text" style={{height:'30px'}} placeholder='Search' value={inputValue} 
            onChange={(e) =>setImputValue (e.target.value) }/>
      </div>
      <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
        
        { filteredProducts .map(product => (
          <Card addToBasket={addToBasket} key={product.id} product={product}/>
        )) }
        
      </div>
    </div>
  )
}

export default Main