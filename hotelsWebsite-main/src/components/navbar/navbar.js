import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png'
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { EmailContext } from '../../context/emailContext';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../context/languageContext';

function NavBar() {

    var {emailValue}=useContext(EmailContext)
    const {languageValue,setLanguageValue} = useContext(LanguageContext)
    const [ t,i18n ] = useTranslation();
    function selectTeam (event){
      setLanguageValue(event.target.value)
      console.log (languageValue)
      if(i18n.language==="en")
      i18n.changeLanguage("ar")
      else if (i18n.language==="ar")
      i18n.changeLanguage("en")
    
    }

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='m-2' dir={`${i18n.language==="en"?"ltr":"rtl"}`}>
      <Container>
        <Navbar.Brand className='m-0' style={{width:"80%"}}><NavLink to="/"><img src={logo} style={{width:"20%"}}></img></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {/* <Nav.Link ><Link to ='/languages' style={{color:"#D32F2F",fontWeight:"700",textDecoration:"none"}}><div className='d-flex'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe-europe-africa" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.809.809 0 0 1 1.034-.275.809.809 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34c.078.028.16.044.243.054.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.333.333 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501Z" />
</svg><p className='ms-2'>{t("Language")}</p></div></Link></Nav.Link> */}
            <Nav.Link ><Link to ='/' style={{color:"#D32F2F",fontWeight:"700" ,textDecoration:"none"}}>{t("Home")}</Link></Nav.Link>
            <Nav.Link><Link  to ='/favorites' style={{color:"#D32F2F",fontWeight:"700",textDecoration:"none"}}>{t("Favorites")}</Link></Nav.Link>
            <Nav.Link ><Link to='/cart' style={{color:"#D32F2F",fontWeight:"700",textDecoration:"none"}}>{t("Orders")}</Link></Nav.Link>
            <Nav.Link ><Link to='/login' style={{color:"#D32F2F",fontWeight:"700",textDecoration:"none"}}>{localStorage.name===undefined?`${t("Login")}`:localStorage.name?.split(' ')[0]}</Link></Nav.Link>
            <Nav.Link ><Link style={{ color: "#D32F2F", fontWeight: "700", textDecoration: "none" }} ><div className='d-flex dropdown'>
              <select   className='ms-2  ' style={{ color: "#D32F2F", fontWeight: "700", textDecoration: "none" }} onChange={selectTeam} id="teams">
                <option  value="en">Language</option>
                <option  value="ar">اللغة</option>
              </select>

            </div></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;