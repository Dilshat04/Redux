import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';

function Basket() {
  const basketProducts = useSelector((store) => store.basketProducts)

  const dispatch = useDispatch()




  const handleDeleteProduct = (id) =>{
    dispatch( {type: "DELETE_PRODUCT",id} )
    
  }




  
  return (
    <div>
       <h2>Basket</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        {basketProducts.map(product=> (
          <div key={product.id} style={{display: 'flex', border: '1px solid black', padding: '10px', gap: '10px'}}>
            <div>   
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
            <img style={{width: '50px'}} src={product.image} alt="img" />
            <button  on onClick={ () => handleDeleteProduct(product.id)}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Basket