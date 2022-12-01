import {Link} from 'react-router-dom'

function Footer(){
    return(
        <footer className="footer-area">
        <div className="right-shape">
            <img src="./Finbank __ Responsive HTML 5 Template_files/footer-right-shape.png" alt=""/>
        </div>

        <div className="footer-top">
            <div className="lef-shape">
                <span className="icon-origami"></span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                        <div className="single-footer-widget single-footer-widget--link-box">
                            <div className="title">
                                <h3>Loans</h3>
                            </div>
                            <div className="footer-widget-links">
                                <ul>
                                    <li> <Link to="/"> Home</Link></li>
                                    <li>  <a href="#servicos">Serviços</a></li>
                                    <li>  <Link to="/profile">Sua conta</Link></li>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
   
        <div className="footer">
            <div className="container">
                <div className="row">

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="single-footer-widget marbtm50">
                            <div className="our-company-info">
                                <div className="footer-logo-style1">
                                 
                                </div>
                                <div className="copyright-text">
                                    <p>
                                        Copyright © 2022 BRbank. Licensed by the<br/>
                                        Central Bank of Brazil.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
              
                    
                

                </div>
            </div>
        </div>
 

        <div className="footer-bottom">
            <div className="container">
                <div className="bottom-inner">
                   
                    <div className="footer-social-link">
                        <ul className="clearfix">
                            <li>
                                <a>
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    );
}

export default Footer;