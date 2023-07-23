import React ,{useState,useEffect,useContext} from 'react';
import { collection ,getDoc,doc, getDocs} from 'firebase/firestore';

import { SearchContext } from '../../context/context';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/actions/action';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IdContext } from '../../context/contextId';
import { db } from '../results/firebase';
import {AiFillCar, AiFillFormatPainter, AiOutlineArrowRight, AiOutlineCheck, AiOutlineCoffee, AiOutlineFork, AiOutlineWifi} from 'react-icons/ai'
import { BiArrowBack, BiBed, BiBuilding, BiBus, BiCloudSnow, BiCurrentLocation, BiMoon,  BiPaperPlane } from 'react-icons/bi'
import { IoMdStar } from 'react-icons/io'
import {  GiForkKnifeSpoon,  } from 'react-icons/gi'
import { BsFillPersonFill, BsInfo } from 'react-icons/bs'
import { FaAccessibleIcon, FaAlignRight, FaArrowDown, FaBus, FaCar, FaCartPlus, FaGrinStars, FaLocationArrow, FaPersonBooth, FaPlane} from 'react-icons/fa'

import Carousel from 'react-bootstrap/Carousel';
import LoadingSpinner from '../results/loading';

import i18n from '../../i18n';

function Details() {
    const[results,setRes]=useState({});
    const[allresults,setAllRes]=useState([]);

    var {searchValue,setSearchValue}=useContext(SearchContext)
    var {idValue,setIdValue}=useContext(IdContext)
    const [loading, setLoading] = useState(false);

    function getAllData(){
      const resultsCollection=collection(db,searchValue);
      getDocs(resultsCollection).then(res=>{
       const result =res.docs.map(doc=>({
        data:doc.data(),
        id:doc.id
       }))
       setAllRes(result);
      }).catch(err=>{console.log(err);});
    }
  
   
  useEffect(() =>{
    getData();
    getAllData();

  },[]);


  async function  getData(){
    setLoading(true)
    const resultItem=doc(db,searchValue,idValue);
     const  docSnap=await getDoc(resultItem);
    console.log(docSnap.data())
    setRes(docSnap.data())
    setLoading(false)
  }
  return (
    loading?<div style={{width:"100%",paddingLeft:"50%"}}><LoadingSpinner /></div>:<div>
<div className="container ">
     
        <div className="row">
            <div className="col-6">
                <img className="img-fluid" src={results.img1} alt='af1'/>
            </div>
            <div className="col-6">
           <div className='row'>
            <div className="col-6">
                <img className="img-fluid" src={results.img2} alt='af1'/>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={results.img3} alt='af1'/>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={results.img4} alt='af1'/>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={results.img5} alt='af1'/>
            </div>
            </div>
            </div>

        </div>
        <div className="row">
        <ul className="nav nav-underline position-relative">
            <li className="nav-item">
               < a className="nav-link active" aria-current="page" href="#">{i18n.language==="en"?`Overview`:`ملخص`}</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#second">{i18n.language==="en"?`Rooms`:`غرف`}</a>
             </li>
           <li className="nav-item">
             <a className="nav-link" href="#third">{i18n.language==="en"?`Location`:`موقع`}</a>
            </li>
          <li className="nav-item">
           <a className="nav-link " href="#fourth">{i18n.language==="en"?`Amenities`:`وسائل الراحة`}</a>
         </li>
         <li className="nav-item">
           <a className="nav-link " href="#fifth">{i18n.language==="en"?`Policies`:`سياسات`}</a>
         </li>
         <button className="btn btn-primary position-absolute top-0 end-0 rounded " ><a className=" text-white" style={{textDecoration:"none"}} href="#second">{i18n.language==="en"?`Reserve Rooms`:`إحجز غرف`}</a></button>
         
        </ul>
        <hr/>
        </div>
        <div className="row p-3">
            <div className="col-sm-8">
                <h1>{i18n.language==="en"?`${results.name}`:`${results.nameAR}`}</h1>
                <p>{i18n.language==="en"?`${results.discriprion}`:`${results.discriprionAR}`}</p>
                <h3>{results.evaluation}/10 {i18n.language==="en"?`Fabulous`:`رائع`}</h3>
                <button className="btn text-start text-primary"  >{i18n.language==="en"?`See all 268 reviews`:`اطلع على جميع التعليقات البالغ عددها 268`}<AiOutlineArrowRight /></button>
                <h3>{i18n.language==="en"?`Popular amenities`:`وسائل الراحة الشائعة`}</h3>
                <div className='row'>
                <div className="col-6">
                    <p><AiOutlineCoffee/>{i18n.language==="en"?`Free breakfast`:`فطور مجاني`} </p>
                    <p><AiFillCar/>{i18n.language==="en"?`Free parking`:`موقف سيارات مجاني`} </p>
                    <p><GiForkKnifeSpoon/>{i18n.language==="en"?`Free Restaurant`:`مطعم مجاني`} </p>

                </div>
                <div className="col-6">
                    <p><BiBus/> {i18n.language==="en"?`Airport transfers`:`انتقالات المطار`}</p>
                    <p><AiOutlineWifi/> {i18n.language==="en"?`Free WiFi`:`واى فاى مجانى`}</p>
                    <p><BiCloudSnow/>{i18n.language==="en"?`Air conditioning`:`تكيف`}</p>

                </div>
                </div>
            </div>
            <div className="col-sm-4">
            <div ><iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20sekt%20elfadl,%20Talaat%20Harb,%20st,%20Cairo%20Governorate+(Valencia%20hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">{i18n.language==="en"?`area maps`:`خرائط المنطقة`}</a></iframe></div>
                
                <p>{i18n.language==="en"?`${results.address}`:`${results.addressAR}`}</p>
                <button className="btn text-start text-primary"  >{i18n.language==="en"?`View in a map`:`عرض في الخريطة`} <AiOutlineArrowRight /></button>
                <h3>{i18n.language==="en"?`What's around`:`ماذا يوجد في الجوار`}</h3>
                <p><BiCurrentLocation/>  {i18n.language==="en"?`${results.around}`:`${results.aroundAR}`}</p>
                
            </div>
        </div>

        <h1>{i18n.language==="en"?`Choose your room`:`اختر غرفتك`}</h1>

        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4" id='second'>
         <div className="col">
           <div className="card">
              <Carousel>
              <Carousel.Item>
              <img className="d-block w-100" src={results.img2} alt="First slide" />
            </Carousel.Item>
           <Carousel.Item>
        <img
          className="d-block w-100"
          src={results.img1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={results.img3}
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>
      <div className="card-body position-relative">
        <h5 className="card-title">{i18n.language==="en"?`${results.discriprion}`:`${results.discriprionAR}`}</h5>
        <p className="card-text">{results.evaluation}/10 {i18n.language==="en"?`good`:`جيد`} </p>
        <p className="card-text"><BiBuilding/> {i18n.language==="en"?`City view`:`اطلالة المدينة`}</p>
        <p className="card-text"><BsFillPersonFill/> {i18n.language==="en"?`Sleeps`:`ينام`} {results.beds}</p>
        <p className="card-text"> <AiOutlineWifi/> {i18n.language==="en"?`Free WiFi`:`واى فاى مجانى`}</p>
        <p className="card-text"><AiOutlineCoffee/>{i18n.language==="en"?`Free breakfast`:`فطور مجاني`} </p>
        <p className="card-text"><AiFillCar/> {i18n.language==="en"?`Free self parking`:`موقف سيارات مجاني`}</p>
        <p className="card-text"><BsFillPersonFill/> {i18n.language==="en"?`${results.address}`:`${results.addressAR}`}</p>
        <p className="card-text"><BiBed/> {results.beds} {i18n.language==="en"?`King Bed`:`سرير ملكي`}</p>
        <p className="card-text"><BiMoon/> {i18n.language==="en"?`Collect and Redeem`:`جمع واسترداد`}</p>
        <a href='#' >{i18n.language==="en"?"more details":"المزيد من التفاصيل"} <AiOutlineArrowRight /> </a>
        <hr />
        <h6 className="card-title">{i18n.language==="en"?`Cancellation policy`:`سياسة الإلغاء`}</h6>
        <a href='#' >{i18n.language==="en"?`More details on all policy options`:`مزيد من التفاصيل حول جميع خيارات السياسة`}<BsInfo/></a>
        <div className="form-check">
           <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
             <label className="form-check-label" for="flexRadioDefault1">
                 {i18n.language==="en"?`Non-refundable`:`غير قابل للاسترجاع`}
              </label>
             </div>
            <div className="form-check">
             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
             <label className="form-check-label" for="flexRadioDefault2">
             {i18n.language==="en"?`Fully refundable before 18 Jun 2023`:`قابل للاسترداد بالكامل قبل 18 حزيران (يونيو) 2023`}
            </label>
           </div>
           <h5> <span className="badge bg-danger">{i18n.language==="en"?`10% off`:`10% خصم`}</span></h5>
           <h3>€{results.price}</h3>
           <span>{i18n.language==="en"?`for 1 night includes taxes & fees`:`لليلة واحدة شاملة الضرائب والرسوم`}</span><br/>
           <a href='#' >{i18n.language==="en"?`Price details`:`تفاصيل السعر`} <AiOutlineArrowRight /> </a>
           <button className="btn btn-primary position-absolute  end-0  " > <Link to='/booking' style={{textDecoration: "none" ,color: "white"}}>{i18n.language==="en"?`Reserve`:`إحجز`}</Link> </button>



       </div>
      </div>
    </div>
 

        </div>

        <div className="row p-2" id='third'>
            <h2>{i18n.language==="en"?`You may also like`:`ربما يعجبك أيضا`}</h2>
            <Carousel>
      <Carousel.Item>
      <div className="row row-cols-1 row-cols-md-3 g-4">

        {
          allresults.map(result =>  <div className="col">
          <div className="card">
            <img src={result.data.img1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{i18n.language==="en"?`${result.data.name}`:`${result.data.nameAR}`}</h5>
              <IoMdStar size={25 } color='black' className='filled' /><IoMdStar size={25 } color='black' className='filled' /><IoMdStar size={25 } color='black' className='filled' /><IoMdStar size={25 } color='black' className='filled' /><IoMdStar size={25 } color='black' className='filled' />
              <p className="card-text">{i18n.language==="en"?`${result.data.address}`:`${result.data.addressAR}`}</p>
              <div className="row">
                  <div className="col-6"><h6>{i18n.language==="en"?`${result.data.city}`:`${result.data.cityAR}`} <span class="badge bg-secondary">{i18n.language==="en"?`New`:`جديد`}</span></h6> {i18n.language==="en"?`Very Good`:`جيد جدًا`}</div>
                  <div className="col-6"><h2>${result.data.price}</h2>
                  <p>{i18n.language==="en"?`for 1 night`:`لمدة ليلة واحدة`}</p></div>
      
              </div>
            </div>
          </div>
        </div> )
        }

  
  
  
</div>
        
      </Carousel.Item>
      
    </Carousel>
        </div>

        <div className='row p-3 border mt-3 mb-3' id='fourth'>
          <div className="col-4">
            <h2>About this area</h2>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-12">
              <div className="card w-100 " >
            <div ><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20sekt%20elfadl,%20Talaat%20Harb,%20st,%20Cairo%20Governorate+(Valencia%20hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
                   
                     <div className="card-body">
                          <a href="#" >View in map</a>
                      </div>
                 </div>
              </div>
              <div className="row p-4">
              <div className="col-6 ">
                <h3><FaLocationArrow/> What's nearby</h3>
                <p>In Downtown Cairo</p>
                <p>Egyptian Museum - 11 min walk</p>
                <p>Tahrir Square - 1 min drive</p>
                <p>The Grand Egyptian Museum - 19 min drive</p>
                <p>City Stars - 13 min drive</p>
                <p>Giza Pyramid Complex - 16 min drive</p>
                <p>Pyramid of Khufu - 17 min drive</p>
                <p>Great Sphinx of Giza - 17 min drive</p>
                <h3><FaCar/> Getting around</h3>
                <p><FaPlane/> Cairo (CAI-Cairo Intl.) - 35 min drive</p>
                <p><FaPlane/> Giza (SPX-Sphinx Intl.) - 49 min drive</p>
                <p><FaBus/> Cairo Rames Station - 21 min walk</p>
                <p><FaBus/> Free train station pickup</p>
                <p><FaBus/> Airport shuttle (surcharge)</p>
                <p><FaBus/> Free train station drop-off</p>
                <p><FaBus/> Bus station shuttle (surcharge)</p>

              </div>
              <div className="col-6">
                <h3><AiOutlineFork/> Restaurants</h3>
                <p> دجاج كنتاكى - 2 min walk</p>
                <p> كوستا كوفى - 3 min walk</p>
                <p> قهوة بين البنكين - 4 min walk</p>
                <p> كاريبو - 7 min walk</p>
                <p>ماكدونالدز - 3 min walk</p>
              </div>
              </div>
              

            </div>
          </div>


        </div>

        <div className=" row p-3 border mt-3 mb-3" id='fifth'>
          <div className="row p-3">
            <div className="col-4">
              <h2>About this property</h2>

            </div>
            <div className="col-8">
              <h4>{results.name}</h4>
              <p>{results.name}offers an airport shuttle (available 24 hours) for USD 15 per vehicle one-way. For a bite to eat, guests can visit VALENCIA, which serves breakfast. This Art Deco hotel is also 0.6 mi (1 km) from Egyptian Museum. Fellow travellers like the comfortable beds and helpful staff.</p>
              <h4 className='mt-3'>Languages</h4>
              <p>Arabic, Chinese (Mandarin), English, French, German, Italian, Japanese, Spanish</p>
            </div>

          </div>
          <hr/>
          <div className="row p-3 ">
            <div className="col-4">
              <h2>Cleaning and safety practices</h2>
              
            </div>
            <div className="col-8">
             <h4><FaGrinStars/> Enhanced cleanliness measures</h4>
              <p>Disinfectant is used to clean the property</p>
              <p>High-touch surfaces are cleaned and disinfected</p>
              <p>The property is disinfected using an electrostatic spray</p>
              <p>Sheets and towels are washed at 60°C or hotter</p>
              <p>Guest accommodation is sealed after cleaning</p>
              <p>Follows the industry cleaning and disinfection practices of Intertek Cristal (third-party expert - Global), Safe Travels (WTTC - Global) and COVID-19 Guidelines (CDC)</p>
            <h4 className='mt-3'><FaPersonBooth/> Check-in</h4>
              <p>Contactless social distancing and check-out</p>
              <p>Cashless transactions are available for all charges at the property</p>
              <p>Protective shields in place at main contact areas</p>
              <p>Guest accommodations are accessible via mobile device</p>
               <p>Guest rooms kept vacant for 24 hours between stays</p>
              <p>Social distancing measures in place</p>
              <p>Contactless room service is available.</p>
            <h4 className='mt-3'><FaAlignRight/> Safety measures</h4>
              <p>Personal protective equipment worn by staff</p>
              <p>Temperature checks given to staff</p>
              <p>Temperature checks available for guests</p>
              <p>Masks and gloves available</p>
              <p>Masks are required at the property</p>
              <p>Hand sanitiser provided</p>
              <p>Enhanced food service safety measures are in place</p>
              <p>Individually wrapped food options available for breakfast, lunch, dinner and through room service</p>
              <p>Reservations are required for the use of certain on-site facilities</p>




            </div>

          </div>
        </div>

        <div className=" row p-3 border mt-3 mb-3">
          <div className="row mb-2 ">
            <div className="col-4">
              <h2>At a glance</h2>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <h4><AiOutlineCheck/>  Hotel size</h4>
                  <p>  50 rooms</p>
                  <p>  Arranged over 3 floors</p>
                  <h4 className='mt-2'><AiOutlineCheck/>  Arriving/Leaving</h4>
                  <p> Check-in time from 12:30 PM until 11:30 AM</p>
                  <p> Early check-in subject to availability</p>
                  <p> Late check-in subject to availability</p>
                  <p>  Minimum check-in age – 15</p>
                  <p> Check-out time is 12:30 PM</p>
                  <p> Late check-out subject to availability</p>
                  <h4 className='mt-2'><AiOutlineCheck/>  Restrictions related to your trip</h4>
                  <p> Check COVID-19 restrictions</p>
                  <h4 className='mt-2'><AiOutlineCheck/>  Special check-in instructions</h4>
                  <p>  This property offers transfers from the airport (surcharges may apply); to arrange pick-up, guests must contact the property 24 hours prior to arrival, using the contact information on the booking confirmation</p>
                  <p>  Guests will receive an email 5 days before arrival with check-in instructions; front desk staff will greet guests on arrival</p>
                  <p>  To make arrangements for check-in please contact the property at least 24 hours before arrival using the information on the booking confirmation</p>

                </div>
                <div className="col-6">
                <h4><AiOutlineCheck/>  Required at check-in</h4>
                  <p>  Cash deposit required for incidental charges</p>
                  <p> Government-issued photo ID may be required</p>
                  <p> Minimum check-in age is 15</p>
                  <h4 className='mt-2'><AiOutlineCheck/>  Children</h4>
                  <p> One child (12 years old and younger) stays free when occupying the parent or guardian's room using existing bedding</p>
                  <h4 className='mt-2'><AiOutlineWifi/>  Internet</h4>
                  <p>Free WiFi and wired Internet access in public areas</p>
                  <p>Free WiFi and wired Internet access in rooms</p>
                  <h4 className='mt-2'><FaCar/>  Internet</h4>
                  <p>Free on-site self-parking</p>
                  <h4 className='mt-2'><AiOutlineCheck/>  Transfers</h4>
                  <p>Airport shuttle on request (available 24 hours a day)*</p>
                  <p>Free train station shuttle on request (available 24 hours a day)</p>
                  <p>Bus station shuttle*</p>
                  <h4 className='mt-2'><AiOutlineCheck/>  Other information</h4>
                  <p>Smoke-free property</p>
             
                </div>
              </div>
            </div>
            <a  href="#">*See fees and policies for additional details or extra charges<FaArrowDown/></a>
          </div>

          
          <hr/>
          <div className="row ">
            <div className="col-4">
              <h2>Property amenities</h2>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <h4><AiOutlineFork/> Food and drink</h4>
                  <p>Free continental breakfast each morning 7:00 AM–11 AM</p>
                  <p>Restaurant</p>
                  <p>Bar/lounge</p>
                  <p>Coffee shop</p>
                  <p>Coffee/tea in a common area</p>
                  <p>Free daily reception</p>
                  <p>Shared microwave</p>
                  <p>24-hour room service</p>
                  <p>Water dispenser</p>
                  <h4 className='mt-2'><FaPersonBooth/>Travelling with children</h4>
                  <p>Children stay for free (see details)</p>
                  <p>Art supplies</p>
                  <h4 className='mt-2'><FaCartPlus/>What to do</h4>
                  <p>Shopping</p>
                  <p>Access to nearby health club</p>
                  <p>Free bikes nearby</p>
                  <p>Hiking/biking trails nearby</p>
                  <p>Horse riding nearby</p>
                  <h4 className='mt-2'><AiFillFormatPainter/>Services</h4>
                  <p>24-hour front desk</p>
                  <p>Concierge services</p>
                  <p>Tour/ticket assistance</p>
                  <p>Limo or town car service</p>
                  <p>Dry cleaning/laundry services</p>
                  <p>Free newspapers in reception</p>
                  <p>Luggage storage</p>
                  <p>Wedding services</p>
                  <p>Multilingual staff</p>
                  <p>Porter/bellhop</p>
                </div>
                <div className="col-6">
                  <h4><AiOutlineCheck/> Facilities</h4>
                  <p>1 building/tower</p>
                  <p>Built in 2000</p>
                  <p>ATM/banking</p>
                  <p>Safe-deposit box at front desk</p>
                  <p>Library</p>
                  <p>Fireplace in reception</p>
                  <p>Television in common areas</p>
                  <p>Art gallery on-site</p>
                  <p>Shopping centre on-site</p>
                  <p>Lockers available</p>
                  <p>Banquet hall</p>
                  <p>Reception hall</p>
                  <h4 className='mt-2'><FaAccessibleIcon/> Accessibility</h4>
                  <p>Lift</p>
                  <p>Accessible bathroom (selected rooms)</p>
                  <p>In-room accessibility (selected rooms)</p>
                  <p>Roll-in shower (selected rooms)</p>
                  <p>Wheelchair-accessible</p>
                  <p>Braille signage</p>
                  <p>Hand-held shower heads</p>
                  <p>Raised toilet seat</p>
                  <p>Low-height worktop and sink</p>
                  <p>Grab bar near toilet</p>
                  <p>Transfer shower</p>
                  <p>Well-lit path to entrance</p>
                  <p>Step-free path to entrance</p>

                </div>
              </div>
            </div>
          </div>
          
          <hr/>
          <div className="row ">
            <div className="col-4">
              <h2>Room amenities</h2>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <h4><AiOutlineCheck/>Be entertained</h4>
                  <p>42-inch flat-screen TV</p>
                  <p>42-inch flat-screen TV</p>
                  <h4 className='mt-2'><AiOutlineCheck/>Home comfort</h4>
                  <p>Air conditioning and heating</p>
                  <p>Minibar</p>
                  <p>Coffee/tea maker</p>
                  <p>Electric kettle</p>

                  <h4 className='mt-2'><AiOutlineCheck/>Sleep well</h4>
                  <p>Hypo-allergenic bedding</p>
                  <p>Pillow menu</p>
                  <p>Down duvet</p>
                  <p>Soundproofed rooms</p>
                  <p>Premium bedding</p>
                  <p>Memory-foam mattress</p>

                  <h4 className='mt-2'><AiOutlineCheck/>What to enjoy</h4>
                  <p>Balcony</p>
                  <p>Fireplace</p>
                  <p>Individually furnished and decorated</p>
                  <p>Separate dining area</p>
                  <p>Separate sitting area</p>
                  <p>Heated floors</p>


                </div>
                <div className="col-6">
                <h4><AiOutlineCheck/>Freshen up</h4>
                <p>Rainfall shower heads</p>
                <p>Shower only</p>
                <p>Bidet</p>
                <p>Free toiletries</p>
                <p>Hairdryer</p>

                <h4 className='mt-2'><AiOutlineCheck/>Stay connected</h4>
                <p>Desk</p>
                <p>Free newspapers</p>
                <p>Free WiFi and wired Internet</p>
                <p>Phone</p>
                <p>Printer</p>
                
                <h4 className='mt-2'><AiOutlineCheck/>Food and drink</h4>
                <p>Freezer</p>
                <p>Ice maker</p>
                <p>Paper towels</p>

                <h4 className='mt-2'><AiOutlineCheck/>More</h4>
                <p>Daily housekeeping</p>
                <p>In-room safe</p>
                <p>Mobile key entry</p>

                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
        </div>
    </div>
    </div>

  );
}

export default Details;
