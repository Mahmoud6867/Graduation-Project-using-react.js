
import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import { removeFromFavorites } from '../../store/actions/action';
import { Link } from 'react-router-dom';
import { IdContext } from '../../context/contextId';
import i18n from '../../i18n';
import { collection, query, where, getDocs,updateDoc } from "firebase/firestore";
import { db } from '../results/firebase';
import { doc, deleteDoc } from 'firebase/firestore'
import { Rating } from 'react-simple-star-rating';
import ReactStars from 'react-rating-star-with-type'



function Cart() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  var {setIdValue}=useContext(IdContext)
  const[allresults,setAllRes]=useState([]);
  const [rating, setRating] = useState(0) // initial rating value


  function getAllData(){
    const q = query(collection(db, "orders"), where("userName", "==", "ahmed hesain"));
    getDocs(q).then(res=>{
     const result =res.docs.map(doc=>({
      data:doc.data(),
      id:doc.id
     }))
     setAllRes(result);
     console.log(result)
    }).catch(err=>{console.log(err);});
  }

  const handleUpdate = (id,rate) =>{

    const examcollref = doc(db,'orders', id)
    updateDoc(examcollref,{
      rateCustomer:(rate+1)
    } ).then(response => {
      window.location.reload(false);
    }).catch(error =>{
      console.log(error.message)
    })

  }

  useEffect(() => {
    getAllData()
  }, []);
  useEffect(() => {
    getAllData()
  }, [allresults]);
  const handleRemoveFromCart = async  (hotelId) => {
    
      const reference = doc(db, 'orders', hotelId)
      await deleteDoc(reference)
  
  };


  return (
<div class="row col-12 ">
        {allresults.map((hotel) => (
              <div class="container-fluid col-lg-5 col-md-6 col-sm-12  offset-lg-1 offset-md-0 mb-sm-3 me-lg-0 mb-3" >

                <div class="card "key={hotel.id}  style={{boxShadow: "4px 4px 4px 4px #888888"}} >
                         <div class="row g-0">
                          <div class="col-md-4 col-sm-4 col-lg-4 ">
                            <img src={hotel.data.img} class="img-fluid rounded-start h-100" alt="..."/>
                         </div>
                           <div class="col-md-8 col-sm-8 col-lg-8 ">
                           <div class="card-body">
                              <div class="d-flex justify-content-between">
                                <h5 class="card-title fw-bold" style={{fontSize: "medium"}}>{i18n.language==="en"?`${hotel.data.name}`:`${hotel.data.name}`}</h5>
                               
                  <Button
                    variant="btn btn-outline-danger ms-2"
                     onClick={() => handleRemoveFromCart(hotel.id)}
                  >
                  {i18n.language==="en"?"Remove":"إزالة"} 
                   </Button>
                   {/* <Button
                    variant="btn btn-outline-success ms-2"
                     onClick={() => setIdValue(hotel.id)}
                  >
                   <Link to='/details' style={{textDecoration: "none" ,color: "green"}}>{i18n.language==="en"?"Details":"تفاصيل"}</Link> 
                   </Button> */}
                               </div>
                          
                            
                               <p class="card-text" style={{fontSize: "small"}}>Price:{i18n.language==="en"?`${hotel.data.price}`:`${hotel.data.price}`}</p>
                               {/* <div>
                               {localStorage.name}
                              <img className="rounded-pill" src={localStorage.photo} alt="not found" />
                              <p>Your Last Rate</p> {hotel.data.rateCustomer} Stars
                                 </div> */}
                             </div>
                            
  <div class="container ">
    <div class="row d-flex justify-content-center align-items-center ">
      <div class="">
        <div class="card" style={{backgroundColor:" #93e2bb" , borderRadius:"15px"}} >
          <div class="card-body p-4 text-black">
            {/* <div>
              <h6 class="mb-4">Exquisite hand henna tattoo</h6>
              
            </div> */}
            <div class="d-flex align-items-center ">
              <div class="flex-shrink-0">
                <img src= {localStorage.photo}
                  alt="Generic placeholder image" class="img-fluid rounded-circle border border-dark border-3"
                  style={{width:" 70px" }} ></img>
              </div>
              <div class="flex-grow-1 ms-3">
                <div class="d-flex flex-row align-items-center mb-2">
                  <p class="mb-0 me-2"> {localStorage.name}</p>
                
      
                </div>
                <ReactStars 
    value={hotel.data.rateCustomer}  
    edit={true}  
    activeColors='orange' 
    />
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  </div>

                             <div className='App'>
                             <div>
                               Change Your Rate</div>
      <Rating
          onClick={(event, newValue) => {
            handleUpdate(hotel.id,newValue)
            
          }}
        
        ratingValue={hotel.data.rateCustomer}
        value={hotel.data.rateCustomer}
        intialValue={hotel.data.rateCustomer}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo'
      />
      
    </div>
                        </div>
                         </div>
                         </div>
                      </div>
          
        ))}
      </div>
  );
}

export default Cart;
