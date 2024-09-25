
import axios from "axios"


const getProducts = () => {
    return async (dispatch) => {
     let {data} = await axios("https://fakestoreapi.com/products")
    dispatch( {type: "SET_PRODUCTS", products: data})
    }
}

export default getProducts
