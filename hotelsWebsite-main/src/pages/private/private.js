
import Favorites from "../favorites/favorites"
import Login from "../login/login"


export default function Private(){
    

    return ((localStorage.name!==undefined)?<Favorites/>:<Login/>)
}