
import Cart from "../cart/cart"
import Login from "../login/login"


export default function PrivateCart(){
    

    return ((localStorage.name!==undefined)?<Cart/>:<Login/>)
}