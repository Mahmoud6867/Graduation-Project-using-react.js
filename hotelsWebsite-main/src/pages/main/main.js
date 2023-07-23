import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import one from '../../../src/images/1.jpg'
import two from '../../../src/images/2.jpg'
import three from '../../../src/images/3.jpg'
import four from '../../../src/images/4.jpg'
import five from '../../../src/images/5.jpg'
import { SearchContext } from '../../context/context';
import { useTranslation } from 'react-i18next';
import { PersonsContext } from '../../context/personsContext';
import { CheckinContext } from '../../context/checkinContext';
import { CheckoutContext } from '../../context/checkoutContext copy';



function Main() {
  var {searchValue,setSearchValue}=useContext(SearchContext);
  var {personsValue,setPersonsValue}=useContext(PersonsContext);
  var {checkinValue,setCheckinValue}=useContext(CheckinContext);
  var {checkoutValue,setCheckoutValue}=useContext(CheckoutContext);
  const [ t,i18n ] = useTranslation();

  return (
 <div dir={`${i18n.language==="en"?"ltr":"rtl"}`}>
    <div style={{height:"1px" ,opacity:"30%"}} className='w-100 bg-secondary'></div>
     <div class="container">
          
          <div class="row">
            <h2 class="m-2"> <span class="text-primary">{i18n.language==="en"?"Where":"إلى"}</span> {i18n.language==="en"?"to?":"أين؟"}</h2>
            <p class="m-2">{i18n.language==="en"?"Try searching for a city, a specific hotel, or even a landmark!":"حاول البحث عن مدينة أو فندق معين أو حتى معلم!"}</p>
          </div>
          <div class="row col-12 d-flex pt-3 align-items-center p-2 m-1"  style={{boxShadow:" 2px 2px 2px 2px #888888"}}>
            <div class="col-lg-3 col-md-3 col-sm-12 col-12 mb-1" >
              <div class="input-group ">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
                  </div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder={i18n.language==="en"?"search":"إبحث"}
                value={searchValue}
                onChange={(e)=>{setSearchValue(e.target.value); console.log(searchValue)}}/>
              </div>
            </div>
            
            <div class="col-sm col-lg-2 col-md-2 col-sm-6 col-6 mb-1">
              <div class="input-group">
                <label for="checkIn" class="input-group-text">{i18n.language==="en"?`in`:`حجز`}</label>
                <input type="date" class="form-control" id="checkIn"
                  value={checkinValue}
                  onChange={(e)=>{setCheckinValue(e.target.value); console.log(checkinValue)}}/>
              </div>
            </div>
      
            <div class="col-sm col-lg-2 col-md-2 col-sm-6 col-6 mb-1">
              <div class="input-group">
                  <label for="checkOut" class="input-group-text">{i18n.language==="en"?`out`:`خروج`}</label>
                  <input type="date" class="form-control" id="checkOut" value={checkoutValue}
                  onChange={(e)=>{setCheckoutValue(e.target.value); console.log(checkoutValue)}}/>
                </div>
            </div>
            <div class="col-sm col-lg-3 col-md-3 col-sm-6 col-6 mb-1">
              <div class="input-group">
              <label for="checkOut" class="input-group-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                  </svg>
                </label>                
                   <input type="number" className="form-control" id="inlineFormInputGroup" placeholder={i18n.language==="en"?"one persone":"شخص واحد"}
                  value={personsValue}
                  onChange={(e)=>{setPersonsValue(e.target.value); console.log(personsValue)}}
               />
                </div>
            </div>
           
          
           
            <button type="button" class="btn btn-primary search-b col-sm col-lg-2 col-md-2 col-sm-6 col-6 mb-1"   >
             <Link to='/results' style={{textDecoration: "none" ,color: "white"}}>{i18n.language==="en"?"search":"إبحث"}</Link>
              </button>
            
          
          </div>
          <div style={{height:"1px" ,opacity:"30%"}} className='w-100 bg-secondary mt-4'></div>
          <div class="card m-2 " >
      <div class="row g-0 ">
        <div class="col-md-5 col-sm-5 col-lg-5 ">
          <img src={one} class="img-fluid  h-100" alt="..."/>
        </div>
        <div class="col-md-7 col-sm-7 col-lg-7 ">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h3 class="card-title fw-bold" >
              {i18n.language==="en"?"Enjoy the same savings of 20% in the app, and also:":"تمتع بنفس التوفير بنسبة 20٪ في التطبيق وأيضًا:"}
</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" fill="currentColor" class="bi bi-qr-code" viewBox="0 0 16 16">
  <path d="M2 2h2v2H2V2Z"/>
  <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z"/>
  <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z"/>
  <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"/>
  <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z"/>
</svg>
            </div>
            
          
            <p class="card-text" style={{fontSize: "small"}}>{i18n.language==="en"?"Get notifications about your stay":"احصل على إشعارات حول إقامتك"}</p>
            <p class="card-text" style={{fontSize: "small"}}>{i18n.language==="en"?"Book anytime, anywhere at the last minute":"احجز في أي وقت وفي أي مكان في اللحظة الأخيرة"}</p>
            <p class="card-text" style={{fontSize: "small"}}>{i18n.language==="en"?"Easily manage your stay on the go":"إدارة إقامتك بسهولة أثناء التنقل"}</p>
            <p class="card-text" style={{fontSize: "large", fontWeight:"bold"}}>{i18n.language==="en"?"Scan the QR code with your device camera and download our app":"امسح رمز الاستجابة السريعة ضوئيًا باستخدام كاميرا جهازك وقم بتنزيل تطبيقنا"}</p>

          </div>
        </div>
   
      </div>
           </div>
          
          <div class="row">
{/* 
          <div className="row">
            <h2 className="m-2"> <span className="text-primary">{i18n.language==="en"?"Pick up where you left off":"تابع من حيث توقفت"}</span> </h2>
            <p className="m-2">{i18n.language==="en"?"No Resrervations Yet!!!":"لا حجوزات بعد !!!"}</p>
          </div> */}
          <div className="row">
          <h3 className="m-2 pt-4 pb-4"> <span style={{fontWeight:"700"}} >{i18n.language==="en"?"Hotels.com makes it easy and rewarding. Always":"موقع Hotels.com يجعل الأمر سهلاً ومفيدًا. دائماً"}</span> </h3>

            <div className="row col-12 ">
            <div className="container-fluid d-flex  col-lg-3 col-md-3 col-sm-12 col-xs-1  offset-1 offset-lg-1 offset-md-0 mb-sm-3 me-lg-0 mb-3" >
     
            <div className='m-3'><img style={{width:50 , height:50}} src="https://a.travel-assets.com/egds/marks/loyalty_hotels.svg" alt="" /> </div>
            <div><h6>{i18n.language==="en"?"Reward yourself your way":"كافئ نفسك على طريقتك"}</h6>
            <p>{i18n.language==="en"?"Stay where you want, when you want, and get rewarded":"ابق حيث تريد ، وقتما تريد ، واحصل على المكافأة"}</p>
            <a href="#">{i18n.language==="en"?"Learn about Hotels.com Rewards":"تعرف على المزيد حول برنامج Hotels.com Rewards"}</a>
            </div>

   
          </div>
           <div className="container-fluid d-flex col-lg-3 col-md-3 col-sm-12 col-xs-1  offset-1 offset-lg-1 offset-md-0 mb-sm-3 me-lg-0 mb-3" >
           <div className='m-3'><img style={{width:50 , height:50}} src="https://a.travel-assets.com/egds/marks/brands/hotels/mod.svg" alt="" /> </div>
            <div><h6>{i18n.language==="en"?"Unlock instant savings":"فتح المدخرات الفورية"}</h6>
            <p>{i18n.language==="en"?"Save an average of 15% on thousands of hotels with Member Prices":"وفر ما متوسطه 15٪ على آلاف الفنادق ذات أسعار الأعضاء"}</p>
            <a href="#">{i18n.language==="en"?"Sign up, it's free":"التسجيل ، إنه مجاني"}</a> <a href="#" className='ms-3'>{i18n.language==="en"?"Sign in":"تسجيل الدخول"}</a>
            </div>

   
          </div>
          <div className="container-fluid d-flex col-lg-3 col-md-3 col-sm-12 col-xs-1  offset-1 offset-lg-1 offset-md-0 mb-sm-3 me-lg-0 mb-3" >
     
          <div className='m-3'><img style={{width:50 , height:50}} src="https://a.travel-assets.com/egds/marks/loyalty_hotels.svg" alt="" /> </div>
            <div><h6>{i18n.language==="en"?"Free cancellation":"إلغاء مجاني"}</h6>
            <p>{i18n.language==="en"?"Flexible bookings on most hotels*":"حجوزات مرنة لمعظم الفنادق *"}</p>
            
            </div>

   
          </div>
     </div> 
          </div>
          </div>
          <div >
            <h3 class="m-2"> <span style={{fontWeight:"700"}} >{i18n.language==="en"?"We do more than just hotels...":"نحن نقوم بأكثر من مجرد فنادق ..."}</span> </h3>
            <div className='row col-12'>
            <div class="card p-0 text-white container-fluid col-lg-2 col-md-4 col-sm-5 col-6 col-xs-1  offset-1 offset-lg-0 ms-lg-2 ms-md-2 offset-md-0 mb-sm-3 me-lg-0 mb-3">
             <img class="card-img w-100" src={two} alt="Card image" />
            <div class="card-img-overlay">
            <h5 class="card-title text-bottom "style={{paddingTop:"40%"}}>{i18n.language==="en"?"Appartements":"شقق"}</h5>
   
             </div>
           </div>
           <div class="card p-0 text-white container-fluid col-lg-2 col-md-4 col-sm-5 col-6 col-xs-1  offset-1 offset-lg-0 ms-lg-2 ms-md-2 offset-md-0 mb-sm-3 me-lg-0 mb-3">
             <img class="card-img w-100" src={three} alt="Card image" />
            <div class="card-img-overlay">
            <h5 class="card-title text-bottom "style={{paddingTop:"40%"}}>{i18n.language==="en"?"Cottages":"أكواخ"}</h5>
   
             </div>
           </div>
           <div class="card p-0 text-white container-fluid col-lg-2 col-md-4 col-sm-5 col-6 col-xs-1  offset-1 offset-lg-0 ms-lg-2 ms-md-2 offset-md-0 mb-sm-3 me-lg-0 mb-3">
             <img class="card-img w-100" src={four} alt="Card image" />
            <div class="card-img-overlay">
            <h5 class="card-title text-bottom "style={{paddingTop:"40%"}}>{i18n.language==="en"?"Villas":"فلل"}</h5>
   
             </div>
           </div>
           <div class="card p-0 text-white container-fluid col-lg-2 col-md-4 col-sm-5 col-6 col-xs-1  offset-1 offset-lg-0 ms-lg-2 ms-md-2 offset-md-0 mb-sm-3 me-lg-0 mb-3">
             <img class="card-img w-100" src={five} alt="Card image" />
            <div class="card-img-overlay">
            <h5 class="card-title text-bottom "style={{paddingTop:"40%"}}>{i18n.language==="en"?"Motels":"موتيلات"}</h5>
   
             </div>
           </div>
            </div>
          </div>
        
          
        
        </div>
 </div>
  );
}

export default Main;
