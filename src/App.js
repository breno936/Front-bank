import logo from './logo.svg';
import './App.css';
import './componentes/arquivos/animate.min.css';
import './componentes/arquivos/custom-animate.css';
import './componentes/arquivos/bootstrap.min.css';
import './componentes/arquivos/jquery.bxslider.css';
import './componentes/arquivos/all.min.css';
import './componentes/arquivos/jquery.magnific-popup.css';
import './componentes/arquivos/jquery-ui.css';
import './componentes/arquivos/nice-select.css';
import './componentes/arquivos/odometer.min.css';
import './componentes/arquivos/owl.carousel.min.css';
import './componentes/arquivos/owl.theme.default.min.css';
import './componentes/arquivos/swiper.min.css';
import './componentes/arquivos/vegas.min.css';
import './componentes/arquivos/style.css';
import './componentes/arquivos/polyglot-language-switcher.css';

import './componentes/arquivos/01-header-section.css';
import './componentes/arquivos/02-banner-section.css';
import './componentes/arquivos/03-about-section.css';
import './componentes/arquivos/04-fact-counter-section.css';
import './componentes/arquivos/05-testimonial-section.css';
import './componentes/arquivos/06-partner-section.css';
import './componentes/arquivos/07-footer-section.css';
import './componentes/arquivos/08-blog-section.css';
import './componentes/arquivos/10-contact.css';
import './componentes/formFiles/bootstrap.min.css';
import './componentes/formFiles/fontawesome-all.min.css';
import './componentes/formFiles/iofrm-style.css';
import './componentes/formFiles/iofrm-theme1.css';
import './componentes/arquivosCount/bootstrap.min.css';
import './componentes/arquivosCount/all.min.css';
import './componentes/arquivosCount/daterangepicker.css';
import './componentes/arquivosCount/stylesheet.css';
// import 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';

import  './componentes/arquivos/style(1).css';
import  './componentes/arquivos/responsive.css';
import Home from './views/Home/home';
import Login from './componentes/login/login';
import Register from './componentes/register/register';
import Profile from './componentes/arquivosCount/profile';
import Contato from './componentes/contato/contato'
// import Register from './componentes/register/register';
// import {Helmet} from 'react-helmet';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App page-wrapper">
      <BrowserRouter>
   
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/contato" element={<Contato/>}/>

      </Routes>
      </BrowserRouter>
      <Outlet/>
  
    </div>
  );
}

export default App;
