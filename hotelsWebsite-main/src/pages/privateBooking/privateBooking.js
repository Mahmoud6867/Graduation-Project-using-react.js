
import Booking from "../booking/booking"
import Login from "../login/login"


export default function PrivateBooking(){
    

    return ((localStorage.name!==undefined)?<Booking/>:<Login/>)
}