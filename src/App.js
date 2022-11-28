import logo from './logo.svg';
import './App.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/animate.min.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/custom-animate.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/bootstrap.min.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/jquery.bxslider.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/all.min.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/jquery.magnific-popup.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/jquery-ui.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/nice-select.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/odometer.min.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/owl.carousel.min.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/owl.theme.default.min.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/swiper.min.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/vegas.min.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/style.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/polyglot-language-switcher.css';

import './componentes/Finbank __ Responsive HTML 5 Template_files/01-header-section.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/02-banner-section.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/03-about-section.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/04-fact-counter-section.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/05-testimonial-section.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/06-partner-section.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/07-footer-section.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/08-blog-section.css';
import './componentes/Finbank __ Responsive HTML 5 Template_files/10-contact.css';
import './componentes/formFiles/bootstrap.min.css';
import './componentes/formFiles/fontawesome-all.min.css';
import './componentes/formFiles/iofrm-style.css';
import './componentes/formFiles/iofrm-theme1.css';
import './componentes/Payyed - Money Transfer and Online Payments HTML Template_files/bootstrap.min.css';
import './componentes/Payyed - Money Transfer and Online Payments HTML Template_files/all.min.css';
import './componentes/Payyed - Money Transfer and Online Payments HTML Template_files/daterangepicker.css';
import './componentes/Payyed - Money Transfer and Online Payments HTML Template_files/stylesheet.css';
// import 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';

import  './componentes/Finbank __ Responsive HTML 5 Template_files/style(1).css';
import  './componentes/Finbank __ Responsive HTML 5 Template_files/responsive.css';
import Home from './views/Home/home';
import Login from './componentes/login/login';
import Register from './componentes/register/register';
import Profile from './componentes/Payyed - Money Transfer and Online Payments HTML Template_files/profile';
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
