import React, { useContext } from 'react'
import { LanguageContext } from '../../context/languageContext'
import { CurrencyContext } from '../../context/currencyContext'
import { useTranslation } from 'react-i18next';

export default function LangChange() {
    
    const {languageValue,setLanguageValue} = useContext(LanguageContext)
    const {currencyValue,setCurrencyValue} = useContext(CurrencyContext)
    const [ t,i18n ] = useTranslation();
    

    const changeCurrency = ()=>{
        if (currencyValue===`${i18n.language==="en"?"Dollar":"دولار"}`) {
            setCurrencyValue(`${i18n.language==="en"?"Pound":"جنيه"}`)
        }else {
            setCurrencyValue(`${i18n.language==="en"?"Dollar":"دولار"}`)
        }
    }
  return (
    <div className='container m-auto border 'style={{height:"400px"}} dir={`${i18n.language==="en"?"ltr":"rtl"}`}>
        <div className='row'>
        {i18n.language==="en" && <h6 >Langauge : English <button className='btn btn-primary m-5' onClick={()=>{i18n.changeLanguage("ar")}}>Change language</button> </h6>}
        {i18n.language==="ar" && <h6 >اللغة : عربي <button className='btn btn-primary m-5' onClick={()=>{i18n.changeLanguage("en")}}>غير اللغة</button> </h6>}


        <h6 >{i18n.language==="en"?"Currency":"عملات"} : {currencyValue}<button className='btn btn-success m-5' onClick={()=>{changeCurrency()}}>{i18n.language==="en"?"Change Currency":"غير العملة"}</button></h6>
        </div>  
    </div>
  )
}
